const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const receitas = require("./data")

server.use(express.static('public'))



server.set("view engine", "njk")


nunjucks.configure('views', {
    express: server
})


server.get("/", function(req, res) {
    return res.render("home", {items: receitas})
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})
server.get("/receitas", function(req, res) {
    return res.render("receitas", {items: receitas})
})


server.listen(5000,function() {
    console.log('server is up')
})

