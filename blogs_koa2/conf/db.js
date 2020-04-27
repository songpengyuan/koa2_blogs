/**
 * Created by 87790 on 2020/3/26.
 */
const env = process.env.NODE_ENV || 'dev';

let MYSQL_CONF;
let REDIS_CONF;

if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'myblog'
    };

    // redis
    REDIS_CONF = {
        port: 6397,
        host: '127.0.0.1'
    }
}


if(env === 'production'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 123456,
        port: '3306',
        database: 'myblog'
        //insecureAuth : true
    };

    // redis
    REDIS_CONF = {
        port: 6397,
        host: '127.0.0.1'
    }
}


module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}
