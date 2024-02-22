import http from "http";

const PORT = 8000

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.end(JSON.stringify({
    name: 'Newton',
    id: 123123
  }))
})

server.listen(PORT, _ => {
  console.log('listening for port', PORT)
})
