// 基础koa写入,读取cookie

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/set') {
        ctx.cookies.set('school', 'zust'
        ,{
            domain:'localhost', // 写cookie所在的域名
            // path:'/set',       // 写cookie所在的路径
            maxAge:1000*60*60*24,   // cookie有效时长
            expires:new Date('2018-12-31'), // cookie失效时间
            httpOnly:false,  // 是否只用于http请求中获取
            overwrite:true  // 是否允许重写
        }
        )
        ctx.body = 'nihao'
    } else if (ctx.url === '/get') {
        cookieValue = ctx.cookies.get('school');
        ctx.body = 'nihao' + cookieValue
    }
    
})

app.listen(3000)