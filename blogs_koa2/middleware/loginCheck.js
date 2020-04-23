/**
 * Created by 87790 on 2020/4/24.
 */
const {ErrorModel} = require('../model/resModel')

module.exports = async (ctx, next) => {
    if (ctx.session.uaername) {
        await next()
        return;
    }
    ctx.body = new ErrorModel('未登录')
}