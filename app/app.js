const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response) => {
    console.log('server work');
    if (request.method === 'GET') {
        // GET -> получить
        console.log(request.method); // !!!!
        let urlRequest = url.parse(request.url, true);
        //console.log(urlRequest);
        console.log(urlRequest.query.p);
        if (urlRequest.query.p  === '70') {
            response.end('800');
        }
        response.end('ne 800');
    } else {
        // POST
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.hi);
            response.end('ok');
        });
    }
}).listen(3002);

