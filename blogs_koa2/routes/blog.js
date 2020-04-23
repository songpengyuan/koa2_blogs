/**
 * Created by 87790 on 2020/4/23.
 */
const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list',async function (ctx, next) {
    const query = ctx.query;
    ctx.body = {
        error: 0,
        query,
        data: ['获取博客列表']
    }
})

module.exports = router
