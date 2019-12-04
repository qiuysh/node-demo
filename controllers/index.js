const index = async (ctx, next) => {
  await ctx.render('index.html', {
    title: '首页',
    content: 'Welcome, koa2!',
  })
};

module.exports = index;