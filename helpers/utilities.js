/**
 * Title: Utilities
 * Description: Important utilities functions
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies
const crypto = require("crypto");
const environment = require("../helpers/environments");

// module scaffolding
const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.stringify(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === "string" && str.length > 0) {
        const hash = crypto
            .createHmac("sha256", environment.secretKey)
            .update(str)
            .digest("hex");

        return hash;
    } else {
        return false;
    }
};

// export module
module.exports = utilities;
