/**
 * Created by 87790 on 2020/4/23.
 */
const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
    const {username, password} = ctx.request.body;
    ctx.body = {
        error: 0,
        username,
        password
    }
})

module.exports = router
