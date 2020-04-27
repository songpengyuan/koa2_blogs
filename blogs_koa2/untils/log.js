/**
 * Created by 87790 on 2020/4/17.
 */

const fs = require('fs')
const path = require('path')

// 写日志

function writeLog(writeStream, log) {
    writeStream.write(log + '\n')  // 关键代码
}


// 生成write Stream createWriteStream
function createWriteStream(fileName) {
    const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
    const writeStream = fs.createWriteStream(fullFileName, {
        flags: 'a' // 追加写入(append)，覆盖用 ‘W’(write)
    })
    return writeStream;
}


// 写访问日志
const accessWriterStream = createWriteStream('access.log')
const errorWriterStream = createWriteStream('error.log')
const eventWriterStream = createWriteStream('event.log')
function access(log) {
    writeLog(accessWriterStream, log)
}
function error(log) {
    writeLog(errorWriterStream, log)
}
function event(log) {
    writeLog(eventWriterStream, log)
}


module.exports = {
    access,
    error,
    event
}


















