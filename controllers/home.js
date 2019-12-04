
const home = async (ctx, next) => {
  await ctx.render('signin-ok.html', {
    title: 'Sign In OK',
    name: '登陆成功'
  });
};

module.exports = {
  home
}