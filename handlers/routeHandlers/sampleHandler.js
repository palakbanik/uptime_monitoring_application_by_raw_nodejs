/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: "This is a sample URL",
    });
};

module.exports = handler;
