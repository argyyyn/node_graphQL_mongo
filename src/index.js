import express from 'express'

const app = express()

const port = 8000

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
  res.send({id: 1, name: 'GET'})
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