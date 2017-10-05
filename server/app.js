const express =  require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect() //input here for mongodb database

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use() // input here for app use

app.listen(process.env.Port || 3000, ()=>{
  console.log('i am running at port 3000');
})
