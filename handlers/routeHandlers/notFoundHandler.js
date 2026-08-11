/**
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: "404 Page Not Found",
    });
};

module.exports = handler;
