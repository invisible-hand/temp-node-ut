console.log(__dirname)
console.log(__filename)
var i = 0

setInterval(() => {
    console.log('hello world', i);
    i = i + 1 * 100

}, 100)