const express = require('express');
const _ = require('lodash');
const HttpStatus = require('http-status');
const config = require('@config');
const apiRoutes = require('./api');

const router = express.Router();

router.use((req, res, next) => {
    if (config.env === 'development' && !_.isEmpty(req.body)) {
        console.log(`req body: ${JSON.stringify(req.body)}`);
    }

    res.jsonWithBadRequest = function (message) {
        res.status(HttpStatus.BAD_REQUEST).json({message: message});
    };

    res.jsonWithServerError = function (message) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: message});
    };
    next();

});


// router.use('/api/dashboard', (req, res, next) => {
//     console.log(req.method, req.path);
//     if (_.indexOf(['POST', 'PUT'], req.method) !== -1) {
//         const path = req.path;
//         const match = path.match(/^\/(product|order|customer)/i);
//         console.log(match);
//         if (match) {
//             const section = match[1];
//             console.log(section);
//         }
//     }
//     next();
// });

// mount all routes on /api path frontend
router.use('/api/', apiRoutes);

module.exports = router;
