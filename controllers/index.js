const userModel = require('../config/user')

// 重定向到登录
const redirectLogin = async (ctx, next) => {
  ctx.redirect('/login')
};

const logout = async (ctx, next) => {
  ctx.session = null;
  ctx.body = {
    result_message: '已退出当前用户！',
    result: true
  };
};


const findUserByPage = async (ctx, next) => {
  if (ctx.session.user_id) {
    let { page, size } = ctx.request.body;
    let data = await userModel.findUserByPage({page, size});
    ctx.body = {
      data,
      result_message: '查询成功！',
      result: true
    };
  } else {
    ctx.body = {
      result_message: '账号未登录！',
      result: true
    };
    redirectLogin()
  }
};

module.exports = {
  redirectLogin,
  logout,
  findUserByPage
};