const { get } = require('https')

get('https://www.google.com', res => {
  res.on('data', chunk => console.log(chunk))
  res.on('end', _ => console.log('no more data'))
})