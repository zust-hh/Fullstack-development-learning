// 使用koa-static进行静态资源访问

const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const staticPath = './';

app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx) => {
    ctx.body = 'nihao'
})

app.listen(3000)
