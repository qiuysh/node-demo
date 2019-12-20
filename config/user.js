const { sequelize } = require('./default');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(50),
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(18),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: null,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  nick: {
    type: Sequelize.STRING(150),
    allowNull: true,
    unique: true
  },
  detail_info: Sequelize.STRING(250)
}, {
  tableName: 'user',
  createdAt: 'create_time',
  updatedAt: 'modified_time'
});


async function findById(id) {
  const result = await User.findById(id);
  return result;
}

async function findByUser (user) {
  const query = {
    name: user
  };
  const result = await User.findOne({where: query});
  return result;
}

async function findUserByPage ({page, size}) {
  const result = await User.findAndCountAll({
    where: {},
    limit: size,
    offset: size * (page - 1)
  });
  return result;
}

async function createOrUpdate(email, password, callback) {
  
}

module.exports = {
  findById: findById,
  findByUser: findByUser,
  createOrUpdate: createOrUpdate,
  findUserByPage: findUserByPage
};