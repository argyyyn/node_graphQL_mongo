const EventEmitter = require('events')
const celebrity = new EventEmitter()

celebrity.on('post', title => {
  if (title)
    console.log('My celebrity posted a new post with title:', title)
})

celebrity.emit('post', 'here is my haircut which i like')

process.on('exit', code => {
  console.log('process exit event with code', code)
})