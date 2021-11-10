const Kid = require('../models/Kid');
const fs = require("fs");
const path = require("path");


const AWS = require('aws-sdk');



const s3 = new AWS.S3();

module.exports = {

    async list(req, res) {
        const kids = await Kid.findAll();

        return res.json(kids);
    },

    async listOne(req, res) {

        const {kid_id} = req.params;

        const kid = await Kid.findOne({
            where: {id: kid_id}
        });
        if (kid === null) {
            console.log('Not found!');
        } else {
            //console.log(kid instanceof Kid); // true
            console.log(kid); // 'My Title'
        }


        return res.json(kid);
    },

    async login(req, res) {

        const {
            user,
            code
        } = req.body;

        const kid = await Kid.findOne({
            where: {
                user: user,
                code: code
            }
        });
        if (kid === null) {
            console.log('Not found!');
        } else {
            //console.log(kid instanceof Kid); // true
            console.log(kid.id); // 'My Title'
        }

        return res.json(kid.id);
    },

    async update(req, res) {

        const {
            id
        } = req.params;
        const {
            treatment, name, user, code, rate, birth, parent, note, key, photo
        } = req.body;

        console.log('controller update kid', req.params, req.body)
        try {
            const kid = await Kid.update({
                treatment, name, user, code, rate, birth, parent, note, key, photo
            },

                {
                    where: {
                        id: id
                    }
                }
            )

            return res.json(kid);

        } catch (error) {
            console.log(error.message);
            res.json({
                error: true
            });
        }
    },

    async delete(req, res) {
        const {
            id
        } = req.params;
        try {
            const kid = Kid.findByPk(id);
            if (!kid) {
                res.json({
                    error: true
                });
            } else {
                Kid.beforeDestroy(async (kid) => {
                        
                        if (process.env.STORAGE_TYPE === "s3") {
                            try {
                                return s3.deleteObject({

                                    Bucket: 'kidphoto',
                                    Key: kid.key
                                  })
                                  .promise()
                                  .then(() => {
                                    console.log("Success. Object deleted.", data);
                                    return data; // For unit tests.
                                  })
                                  .catch(response => {
                                    console.log(response.status);
                                  });
                                
                            } catch (err) {
                                console.log("Error", err);
                            }
                        } else {
                            try {
                                return promisify(fs.unlink)(
                                    path.resolve(__dirname, "..", "..", "tmp", "uploads", kid.key)
                                )
                            } catch {
                                console.log(error.message);
                                return res.json({
                                    error: true
                                });
                            }
                        }
                    }),
                    (await kid).destroy;
            }
        } catch {
            console.log(error.message);
            res.json({
                error: true
            });
        }
    }
}