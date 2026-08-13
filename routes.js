/**
 * Title: Routes
 * Description: Application Routes
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");
const { userHandler } = require("./handlers/routeHandlers/userHandler");
const { tokenHandler } = require("./handlers/routeHandlers/tokenHandler");

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

// exports routes object
module.exports = routes;
