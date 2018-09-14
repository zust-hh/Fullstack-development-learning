// 使用koa-router写路由层级

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// 设置url前缀 localhost:3000/zust/...
// const router = new Router({
//       prefix:'/zust'
// })

const home = new Router();
home.get('/', async (ctx) => {
    ctx.body = "Home"
}).get('/index', async (ctx) => {
    ctx.body = "Home index"
})

const todo = new Router();
todo.get('/', async (ctx) => {
    ctx.body = 'Todo'
}).get('/index', async (ctx) => {
    ctx.body = 'Todo index'
})

const router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/todo', todo.routes(), todo.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)