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
    let output = {};

    try {
        output = JSON.parse(jsonString);
    } catch (err) {
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

// create random string
utilities.createRandomString = (stringLength) => {
    const length =
        typeof stringLength === "number" && stringLength > 0
            ? stringLength
            : false;

    if (!length) {
        return false;
    }

    const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let output = "";

    for (let i = 1; i <= length; i++) {
        const randomCharacter = possibleCharacters.charAt(
            Math.floor(Math.random() * possibleCharacters.length),
        );

        output += randomCharacter;
    }

    return output;
};

// export module
module.exports = utilities;
