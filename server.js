const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const dataRecipies = require("./data")

server.use(express.static('public'))



server.set("view engine", "njk")


nunjucks.configure('views', {
    express: server,
    autoescape: false
})


server.get("/", function(req, res) {
    return res.render("home", {items: dataRecipies})
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas", {items: dataRecipies})
})

server.get("/receita-descricao", function(req, res) {

    return res.render("receita-descricao", {items: dataRecipies})
})

server.get("/receita-descricao/:index", function(req, res) {
    const recipeIndex = req.params.index
    
    res.render("receita-descricao", { items: dataRecipies[recipeIndex] });

})

server.listen(5000,function() {
    console.log('server is up')
})
