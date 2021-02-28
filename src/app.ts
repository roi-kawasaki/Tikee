const {App} = require('@slack/bolt');

const app = new App({
    token: 'xoxb-130913546627-1826175542736-sKKC064XQZmxb128UZXugvww',
    signingSecret: '48cf9348815ea1fbb2b9365a7e93608f'
})

async function test(){
    // Start your app
    await app.start(3000);

    console.log('⚡️ Bolt app is running!');
};

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');