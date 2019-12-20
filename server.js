// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const next = require('next')
const rootRoutes = require('./routes');
const session = require('koa-session-minimal');  
const mysqlStore = require('koa-mysql-session');
const { config } = require('./config/default.js');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    // 创建一个Koa对象表示web app本身:
    const server = new Koa();

    server.use(session({
      key: 'SESSION_ID',
      store: new mysqlStore(config)
    }))

    
    // 路由拦截处理，区分页面和 api
    server.use(async (ctx, next) => {
      const { path } = ctx;
      const reg = /^\/api\//;
      if (reg.test(path)) {
        await next();  // api 走 koa 的路由
      } else { // 下边走 next 的渲染
        await handle(ctx.req, ctx.res, path, ctx.query);
        ctx.respond = false;
      }
    });

    // 记录请求日志
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    // 应用解析请求体的中间件, koa-bodyparser 支持 json, form, text 类型的请求体
    server.use(bodyParser());

    server.use(logger());

    // 添加路由
    server.use(rootRoutes.routes(), rootRoutes.allowedMethods());

    // 在端口port监听:
    server.listen(port, () => {
      console.log('server is running at http://localhost:'+ port);
    });

})