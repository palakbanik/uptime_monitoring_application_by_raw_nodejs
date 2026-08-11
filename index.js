/**
 * Title: Uptime Motoring Application.
 * Description: A RESTFul API to monitor up or down time of user defined links.
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

// app object - module scaffolding
const app = {};

// testing file system
// @todo: clean after test
data.delete("test", "newFile", (err) => {
    console.log(err);
});

// handle Request & Response
app.handleReqRes = handleReqRes;

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(environment.port, () => {
        // console.log(`environment name is ${process.env.NODE_ENV}`)
        console.log(`Server is running on port ${environment.port}`);
    });
};

// start the server
app.createServer();
