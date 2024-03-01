import express from 'express'

const app = express()

const port = 8000

app.listen(port, () => {
})

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/messages', (req, res) => {
  res.send({id: 1, name: 'argo'})
})

app.post('/messages', (req, res) => {

})