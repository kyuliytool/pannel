var PORT = 2001;
var http = require('http');
const child_process = require('child_process');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var info = {
        platform: process.platform,
        arch: process.arch,
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
        execPath: process.execPath
    };

    if (info.platform === 'linux') {
        info.df = child_process.execSync('df -h', { encoding: 'utf-8' });
    }

    response.end(['<pre>', JSON.stringify(info, null, 4), '</pre>'].join(''));
});

server.listen(2001, function () {
    console.log(['Server', 'listen', 'PORT', String(PORT)].join(' '));
});