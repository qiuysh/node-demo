const login = async (ctx, next) => {
  await ctx.render('login.html', {
    title: '登录',
  });
};

const signin = async (ctx, next) => {
  var name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  if (name === 'koa' && password === '12345') {
    ctx.redirect('/home');
  } else {
    ctx.redirect('/signin_failed');
  }
};

const sign_failed = async (ctx, next) => {
  await ctx.render('signin-failed.html', {
    title: '登录失败',
    name: '请确定账号密码！'
  });
};

module.exports = {
  login,
  signin,
  sign_failed
};