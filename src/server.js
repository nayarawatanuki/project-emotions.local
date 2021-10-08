const express = require('express');
const routesKid = require('./routes/Kids');
//const routesKidPhoto = require('./routes/KidPhoto');
const routesActivity = require('./routes/Activities');
const path = require("path");
const cors = require('cors');
require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    "/photos",
    express.static(path.resolve(__dirname, "../temp/uploads"))
);

app.use(routesKid);
//app.use(routesKidPhoto);
app.use(routesActivity);

app.listen(3000, () => {
    console.log('server start');
})