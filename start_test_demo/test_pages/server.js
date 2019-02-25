const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();
const router = new Router();
 
router.get('/:pages', (ctx) => {
  if (path.extname(ctx.params.pages) !== '') {
    ctx.body = null;
    return;
  }
  const viewPath = path.resolve(__dirname, 'views', `${ctx.params.pages}.html`);
  ctx.set('content-type', 'text/html; charset=UTF-8');
  ctx.body = fs.readFileSync(viewPath, 'utf8')
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => {
  console.log('测试页服务在 4000 端口启动')
});
