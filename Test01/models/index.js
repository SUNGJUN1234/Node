const Sequelize = require('sequelize')
const Books = require('./books')
const env = 'development'
const config = require('../config/config.json')[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const db = {};

db.sequelize = sequelize
db.Books = Books

Books.init(sequelize);

module.exports = db;