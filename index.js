const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://awj0909:qwert123@bolierbplate.1gvuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB conected...'))
.catch (err => console.log(err))

app.get('/', (req,res) => res.send('Hello World! 이제 시작이야'))

app.listen(port, () => console.log('Example app listening on port' + port +'!'))