const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const httpStatus = require('http-status');
const helmet = require('helmet');
const routes = require('../routes')

const config = require('@config');
const APIError = require('../helpers/APIError');

const app = express();
if (config.env === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'))
}
app.disable('etag'); //disable cache, mostly jsons so no need for this
// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use(express.static('uploads'))

const debugRequestBody = function (req, res, next) {
    console.log(`================== [DEBUG - REQUEST] ========================`);
    console.log(`[DEBUG] - req url: ${req.baseUrl + req.url}, ${req.method}, query: ${JSON.stringify(req.query)}, body: ${JSON.stringify(req.body)}`);
    next()
};

//app.use(debugRequestBody)

function debugResponseBody(req, res, next) {
    const oldJSON = res.json;
    res.json = function (data) {
        console.log(`================== [DEBUG - RESPONSE] ========================`);
        console.log(`[DEBUG] - req url: ${req.baseUrl + req.url}, query: ${JSON.stringify(req.query)}, body: ${JSON.stringify(req.body)}`);
        console.log(`[DEBUG] - res.json with data: ${JSON.stringify(data)}`);
        oldJSON.apply(res, arguments);
    };
    next();
}

//app.use(debugResponseBody);

const dbModels = require("@models");
app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`
    //req.logger = logger
    req.db = dbModels;
    // dbModels.Staff.findByPk(1).then(staff => {
    //     //console.log("req.staff = staff", staff)
    //     req.staff = staff.get({plain: true});
    //     next()
    // });

    next();
})


app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

    //console.log('MIDDLEWARE ERROR TYPE: validation error: ', ( err instanceof req.db.Sequelize.ValidationError));

    let messageError = err.message;
    if (err instanceof req.db.Sequelize.ValidationError) {
        messageError = err.errors.length > 0 ? err.errors[0].message : messageError
    }
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: messageError,

        //config.env === 'development' ? messageError : "系统错误，请稍后重试!",
        stack: config.env === 'development' ? err.stack : {}
    })
}
);


module.exports = app;
