const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const slow = require("koa-slow");

const app = new Koa();
const router = new Router();

app.use(slow({ url: /.*/, delay: 3000 })); 
app.use(serve("dist"));

router.get("/api/data", async (ctx) => {
  ctx.body = { message: "Данные загружены" };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
