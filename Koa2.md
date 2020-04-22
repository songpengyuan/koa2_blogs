# 10-1 开始
## 使用koa2
- express中间件是异步回调，koa2原生支持async/awit
- 新开发的框架和系统，都开始基于koa2,例如ess.js
 - express虽然为过时，但是koaw肯定是未来趋势

## 目录
- 介绍async/await
    1. await 后面可以追加 promise 对象，获取resolve 的值
    2. await 必须包裹在 async 函数里面
    3. async 函数执行返回的也是一个promise
    4. try-catch 截获Promise 中的reject 的值

# 10-2 介绍koa2
- 安装（使用脚手架）
    - npm install koa-generator -g
    - Koa2 koa2--test
    - npm install & npm run dev
- 初始化代码，处理路由
- 使用中间件