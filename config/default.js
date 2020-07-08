const Sequelize = require('sequelize');

const config = {
  database: 'xxx', // 使用哪个数据库
  user: 'xxx', // 用户名
  password: 'xxx', // 口令
  host: 'xxx', // 主机名
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