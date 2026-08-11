/**
 * Title: Uptime Motoring Application.
 * Description: A RESTFul API to monitor up or down time of user defined links.
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 5000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });
};

// handle Request & Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
