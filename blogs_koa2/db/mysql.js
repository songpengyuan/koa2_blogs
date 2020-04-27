/**
 * Created by 87790 on 2020/4/23.
 */

const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db.js')

const con = mysql.createConnection(MYSQL_CONF);

// 开始连接
con.connect();

// 统一执行 sql 的函数
let exec = (sql)=> {
    console.log(sql)
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(result)
        })
    })
    return promise;
}

module.exports = {
    exec,
    escape: mysql.escape
}