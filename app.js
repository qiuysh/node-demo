// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const nunjucks = require('nunjucks');
const static = require('koa-static');
const views = require('koa-views');
// const Sequelize = require('sequelize');
// const config = require('./config/default');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// 记录请求日志
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var start = new Date().getTime(),
        execTime;
    await next();
        execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// 处理静态文件
app.use(static(
  path.join(__dirname,  './static')
))

// 解析post请求body
app.use(bodyParser());

app.use(logger());

nunjucks.configure('views', { autoescape: true });
// 模版添加render
app.use(views(path.join(__dirname, './views'), {
  map: {html: 'nunjucks' }
}));

// 添加路由
app.use(async (ctx, next) => {
  await require('./routes').routes()(ctx, next)
});


// 在端口3000监听:
app.listen(3000);

console.log('app started at port 3000...');