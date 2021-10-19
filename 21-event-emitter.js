const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data received! + ${name} + ${age}`);
})

customEmitter.on('response', (age, name) => {
    console.log(`data received! + ${age} + ${name}`);
})

customEmitter.on('response', () => {
    console.log(`2 data received!`);
})

customEmitter.emit('response', 'john', 34)