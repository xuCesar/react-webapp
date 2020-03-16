const path = require("path");

const development = require('./env/development');
const production = require('./env/production');

const nodeEnv = process.env.NODE_ENV;
const defaults = {
    env: nodeEnv || 'development',
    port: process.env.PORT || '7002'
};
console.log(`loading env: ${nodeEnv}`);

let config = {};
if (nodeEnv === 'production') {
    config = { ...defaults, ...production };
} else {
    config = { ...defaults, ...development };
}


config.rootPath = path.resolve(__dirname, "../..");
config.uploadPath = path.resolve(__dirname, "../..", "uploads");
config.internalUploadPath = path.resolve(__dirname, "../..", "internal_uploads");


config.redisURL = `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${process.env.REDIS_PORT || '6379'}`
console.log("redis url", config.redisURL);
//hook with some number
module.exports = config;
