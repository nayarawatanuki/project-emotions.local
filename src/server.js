require('dotenv').config();

const express = require('express');
const path = require("path");
const cors = require('cors');
require('./backend/db');

const routesKid = require('./backend/routes/Kids');
const routesTask = require('./backend/routes/Tasks');
const routesTaskView = require('./backend/routes/TaskView');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    "/photos",
    express.static(path.resolve(__dirname, "../src/backend/temp/uploads"))
);

app.use(routesKid);
app.use(routesTask);
app.use(routesTaskView);

app.listen(3000, () => {
    console.log('server start');
})