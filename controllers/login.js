const userModel = require('../config/user')

const login = async (ctx, next) => {
  let { username, password } = ctx.request.body;
  let user = await userModel.findByUser(username);
  if (user && username === user.name && password === user.password) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    delete user.password;
    ctx.body = {
      data: {
        name: user.name,
        email: user.email,
        nick: user.nick,
        phone: user.phone,
      },
      result_message: '登录成功！',
      result: true
    };
  } else {
    ctx.body = {
      result_message: '账号或者密码不正确！',
      result: false
    };
  }
};


module.exports = {
  login,
};