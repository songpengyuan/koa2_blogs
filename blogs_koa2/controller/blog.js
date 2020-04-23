/**
 * Created by 87790 on 2020/3/29.
 */
const xss = require('xss')
const {exec} = require('../db/mysql')


const getList = async (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += ` and author = '${author}' `
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return await exec(sql)
}

const getDetail = async (id) => {
    let sql = `select * from blogs where id='${id}' `
    /*
     return await exec(sql).then(rows => {
        return rows[0]
     })
    */
    const rows = await exec(sql)
    return rows[0]
}

const newBlog = async (blogData = {})=> {
    const {title, content, author} = {...blogData};
    const createtime = Date.now();
    const sql = `
        insert into blogs (title, content, author, createtime)
        values ('${title}', '${content}', '${author}', ${createtime});
     `
    const insertData = await exec(sql)
    return {
        id: insertData.insertId
    }
}

const updateBlog = async (id, blogData = {})=> {
    console.log('updateBlog...', id, blogData);
    const {title, content, author} = {...blogData};
    const sql = `
        update blogs set title='${title}', content='${content}' where id = '${id}'
     `
    const updateData = await exec(sql);
    if (updateData.affectedRows > 0) {
        return true
    }
    return false;
}

const delBlog = async (id, author)=> {
    // id 要删除blog 的ID
    console.log('delBlog...', id);

    const sql = `
        delete from blogs where id = '${id}' and author = '${author}';
     `
    const delData = await exec(sql);
    if (delData.affectedRows > 0) {
        return true
    }
    return false;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}