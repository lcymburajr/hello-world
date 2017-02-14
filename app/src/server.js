var path = require('path')
var express = require('express')
var app = express()

app.use('/', express.static(path.resolve('html')))
app.use('/about', express.static(path.resolve('html/about.html')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
