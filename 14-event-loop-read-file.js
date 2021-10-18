const { readFile } = require('fs')

console.log('1 started a first task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
console.log(result)
console.log('2 completed the first task')
})
console.log('3 starting the next task');