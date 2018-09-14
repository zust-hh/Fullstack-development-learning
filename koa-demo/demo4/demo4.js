// 简单koa路由

const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`
        try{
            fs.readFile(pageUrl, 'binary', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        } catch(err) {
            reject(err);
        }
    })
}

async function route(url) {
    let page = '404.html';
    switch(url) {
        case '/': 
            page = 'index.html';
            break;
        case '/todo': 
            page = 'todo.html';
            break;
        default: break;
    }
    let html = await render(page);
    return html;
}

app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url);

    ctx.body = html;
})

app.listen(3000)