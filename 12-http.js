const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the / page')
    }
    else if (req.url === '/about') {
        res.end('About page')
    }
    else { res.end(`
    <h1>OOooops</h1>
    `)
} 
})

server.listen(5000)