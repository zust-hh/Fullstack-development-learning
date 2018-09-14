// 对参数进行解析

const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    //当请求时GET请求时，显示表单让用户填写
    if(ctx.url==='/' && ctx.method === 'GET'){
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
    //当请求时POST请求时
    }else if(ctx.url==='/' && ctx.method === 'POST'){
        let postData = await parsePostData(ctx);
        ctx.body=postData;
    }else{
        //其它请求显示404页面
        ctx.body='<h1>404!</h1>';
    }
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try{
            let postData = '';
            ctx.req.addListener('data', (data) => {
                postData += data;
            });
            ctx.req.on('end', () => {
                resolve(parseQueryString(postData));
            })
        } catch(err) {
            reject(err);
        }
    })
}

function parseQueryString(queryString) {
    let queryData = {};
    let queryList = queryString.split('&');

    queryList.forEach((item) => {
        let itemList = item.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    })
    return queryData;
}

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})