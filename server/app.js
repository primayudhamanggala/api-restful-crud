const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const memo = require('./routes/memo')
app.use('/memo', memo)

app.listen(3000, () => {
  console.log('Live at port 3000');
})
