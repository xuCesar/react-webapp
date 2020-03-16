const moduleAlias = require('module-alias');
// Register alias
moduleAlias.addAliases({
    '@root': __dirname,
    '@config': __dirname + '/app/config',
    '@controllers': __dirname + '/app/controllers',
    '@models': __dirname + '/app/db/models/index.js',
    '@mw': __dirname + '/app/middlewares',
    '@libs': __dirname + '/app/libs',
    '@helpers': __dirname + '/app/helpers',
});

//moment timezone
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Shanghai');
moment.locale('zh-cn');

// config should be imported before importing any other file
const config = require('@config');
const app = require('@config/express');


// module.parent check is required to support mocha watch
// app: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
    });
}

module.exports = app;
