const userModel = require('../config/user')

const login = async (ctx, next) => {
  let { username, password } = ctx.request.body;
  let user = await userModel.findByUser(username);
  if (user && username === user.name && password === user.password) {
    ctx.body = {
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