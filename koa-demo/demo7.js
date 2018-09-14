// koa-router接收基本get/post参数

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener("end",function(){
                resolve(postdata);
            })
        }catch(error){
            reject(error);
        }
    });
}

router.get('/', function (ctx, next) {
    let html =`
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body =html;
}).post('/', async (ctx) => {
    let postData = await parsePostData(ctx);
    ctx.body=postData;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at port 3000');
})