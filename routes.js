/**
 * Title: Routes
 * Description: Application Routes
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
    sample: sampleHandler,
};

// exports routes object
module.exports = routes;
