const http = require('http')

const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.end('Home page')
}

else if (req.url === '/about') {
    res.end('<h1>About page</h1>')

    // Blocking code

    for (let i = 0; i < 10000; i++) {
        for (let j = 0; j < 10000; j++) {
            console.log(`${i} and ${j}`)

    }
}
}

else {
    res.end('Other page')
}

})


server.listen(5000, () => {
    console.log('Ready. Server is listening on port 5000');
})