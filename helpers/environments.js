/**
 * Title: Environments
 * Description: Environments related all things
 * Author: Palak Banik
 * Date 11/08/2026
 **/

// dependencies

// module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: "staging",
    secretKey: "sdoshdofsdowhoeh",
};

environments.production = {
    port: 5000,
    envName: "production",
    secretKey: "eoweowodnfosvoosdow",
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === "object"
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
