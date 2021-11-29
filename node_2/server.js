const http = require('http');

require('dotenv').config()

const fs = require('fs');
const html = fs.readFileSync('index.html');

const querystring = require('querystring');


const port = process.env.PORT;
const host = process.env.HOST;
const message = "Hello World";

////// server start

const app = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    //  response.write('<h1>Home Page</h1>');
    // response.write(message);

    //request
    let post = ''
    request.on('data', (value) => {
        post += value;
    })

    request.on('end', () => {
        if (post) {
            post = querystring.parse(post)
            console.log(post)
        }
    })
    response.end(html);

})


app.listen(port, host);