const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World2!')
})

app.get('/dev', function (req, res) {
  res.send('Hello in dev ')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
