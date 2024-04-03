const express = require('express')
const cors = require('cors')
const app = express()

const port = 8000

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'trace-id']
}));

const messages = [
  {id: 1, name: 'argo'},
  {id: 2, name: 'cargo'},
]

app.listen(port, () => {
})

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/messages', (req, res) => {
  console.log(req.headers)
  res.send(messages)
})

app.post('/messages', (req, res) => {
  res.send({id: 1, name: 'POST'})
})

app.get('/messages/:id', (req, res) => {
  const id = Number(req.params.id)
  const message = messages[id]

  if (message)
    res.send(message)
  else
    res
      .status(404)
      .send({error: 'no message found'})
})