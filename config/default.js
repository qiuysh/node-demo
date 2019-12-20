const Sequelize = require('sequelize');

const config = {
  database: 'test', // 使用哪个数据库
  user: 'root', // 用户名
  password: '123456', // 口令
  host: 'localhost', // 主机名
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
      max: 10,
      min: 0,
      idle: 10000
  }
});

module.exports = {
  config,
  sequelize
};