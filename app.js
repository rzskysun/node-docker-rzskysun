var http = require('http');

http.createServer(function(request, response) {
    //发送Http头部
    //Http状态值 200:OK
    //内容类型 text/plain

    response.end('hello world\n');
}).listen(8080)

console.log('Server running art http://127.0.0.1:8080');
