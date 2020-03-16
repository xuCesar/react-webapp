'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`@config/database`)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.sequelize.sync({force:true});
// db.Customer.sync({force: true});
// db.Shipping.sync({force: true});
// db.Product.sync({force: true});
// db.ProductContent.sync({force: true});
// db.ProductProperty.sync({force: true});
// db.Order.sync({force: true});
// db.OrderProduct.sync({force: true});
// db.OrderCoupon.sync({force: true});
// db.OrderShipping.sync({force: true});
// db.AdminLog.sync({force:true})

module.exports = db;
