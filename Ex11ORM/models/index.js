// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

const Sequelize = require('sequelize')
const User = require('./user')
const env = 'development'
//config중에서도 development만 가져올 수 있도록 뒤에 [env]를 붙여주자
const config = require('../config/config.json')[env]

// db 연결정보
const sequelize = new Sequelize(config.database, config.username, config.password, config)
// sequelize , object 정보를 넣어줄 변수 선언
const db = {};  
// db.key값 = value(db정보)
db.sequelize = sequelize
db.User = User  // db와 테이블 연결 작업

User.init(sequelize);   // table 초기화
// 만약 associate도 호출하고 싶다면
// User.associate(db);  // db 관계설정

module.exports = db;
