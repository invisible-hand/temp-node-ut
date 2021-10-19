const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', 
{highWaterMark:120000})

stream.on('data', (result) => {
console.log(`received ${result.length} bytes`, result);
})

stream.on('error', (err) => {
    console.log('error!');
})