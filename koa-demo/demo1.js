// 简单koa命令

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.querystring;
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    
    ctx.body = {
        url,
        query,
        queryString,
        request,
        req_query,
        req_querystring,
    }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000')
})