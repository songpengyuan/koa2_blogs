/**
 * Created by 87790 on 2020/3/30.
 */
const {exec, excape} = require('../db/mysql')
const {genPassword} = require('../untils/cryp')



const logincheck = async (username, password)=> {
    username = excape(uaername);

    // 生成加密密码
    password = genPassword(password);
    password = excape(password);
    const sql = `
        select username, realname from users where username = '${username}' and password = '${password}'
    `
    const rows = await exec(sql)
    return rows[0] || {}
}

module .exports = {
    logincheck
}