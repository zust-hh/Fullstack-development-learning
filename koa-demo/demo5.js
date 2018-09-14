// 使用koa-router写简单路由

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello index'
}).get('/todo', (ctx) => {
    ctx.body = 'Todo'
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)