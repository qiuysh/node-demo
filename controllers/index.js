const userModel = require('../config/user')

const index = async (ctx, next) => {
  console.log(ctx)
};

const logout = async (ctx, next) => {
  ctx.session.token = null;
  ctx.body = {
    result_message: '已退出当前用户！',
    result: true
  };
};

const findUserByPage = async (ctx, next) => {
  let { page, size } = ctx.request.body;
  let data = await userModel.findUserByPage({page, size});
  ctx.body = {
    data,
    result_message: '查询成功！',
    result: true
  };
};

module.exports = {
  index,
  logout,
  findUserByPage
};