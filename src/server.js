import http from "http";

const PORT = 8000

const server = http.createServer()

server.listen(PORT, _ => {
  console.log('listening for port', PORT)
})


server.on('request', (req, res) => {

  const items = req.url.split('/')

  if (items[1] === 'friends') {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')

    if (items.length === 3) {
      res.end(JSON.stringify({
        name: 'Newton',
        id: items[2]
      }))
    }
    else {
      res.end(JSON.stringify(['friend 1', 'friend 2']))
    }
  }

  else if (items[1] === 'messages') {
    res.setHeader('Content-type', 'text/html')
    res.write('<h1>argo</h1>')
    res.end()
  }

  else {
    res.statusCode = 404
    res.end()
  }
})