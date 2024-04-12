const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const conn = require('./db/conn')
conn()

const routes = require("./routes/revisao")
app.use('/', routes)

app.listen('3000', function () {
    console.log("kaio")
})