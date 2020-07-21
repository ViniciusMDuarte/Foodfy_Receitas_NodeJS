const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const dataRecipies = require("./data")

server.use(express.static('public'))



server.set("view engine", "njk")


nunjucks.configure('views', {
    express: server
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

server.get('/receita-descricao/:index', function(req, res) {
    const recipeId = req.params.index
    
    if(!dataRecipies[recipeId]) {
       return res.send('Recipe not found!')
    }

    return res.render('receita-descricao', {item: dataRecipies[recipeId]})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})



server.listen(5000,function() {
    console.log('server is up')
})

