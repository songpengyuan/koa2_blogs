/**
 * Created by 87790 on 2020/4/23.
 */
const router = require('koa-router')()
const {getList} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')



router.prefix('/api/blog')

router.get('/list',async function (ctx, next) {
    const query = ctx.query;
    let author = query.author || '';
    let keyword = query.keyword || '';

    if(query.isadmin){
        // 管理员界面
        if(ctx.session.username == null){
            // 未登录
            ctx.body = new ErrorModel('未登录')
            return;
        }
    }


    const listData = await getList(author, keyword);
    ctx.body = new SuccessModel(listData)
})

module.exports = router
