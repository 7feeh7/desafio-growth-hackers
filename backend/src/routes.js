const express = require('express')

const routes = express.Router()

const { v4: uuidv4 } = require('uuid')

const tags = []
const products = []


// route from tags
routes.post('/tags', (req, res) => {
    const { name } = req.body

    const tag = { name, id: uuidv4() }

    tags.push(tag)

    return res.json(tag)
})

routes.get('/tags', (req, res) => {
    return res.json(tags)
})

routes.get('/tags/:id', (req, res) => {
    const { id } = req.params
    const tag = tags.find((tag) => tag.id === id)
    return res.json(tag)
})

routes.put('/tags/:id', (req, res) => {
    const { id } = req.params
    
    const { name } = req.body
    
    const tagIndex = tags.findIndex((tag) => tag.id === id)
    tags[tagIndex] = {
        ...tags[tagIndex],
        name
    }
    return res.json({ message: "Categoria alterado com sucesso!" })
})

routes.delete('/tags/:id', (req, res) => {
    const { id } = req.params

    const tagIndex = products.findIndex((tag) => tag.id === id)

    tags.splice(tagIndex, 1)

    return res.json({ message: "Categoria removido com sucesso!" })
})

// route from products
routes.post('/products', (req, res) => {
    const { name, price } = req.body

    const product = {
        name,
        price,
        id: uuidv4()
    }

    products.push(product)

    return res.json(product)
})

routes.get('/products', (req, res) => {
    return res.json(products)
})

routes.get('/products/:id', (req, res) => {
    const { id } = req.params
    
    const product = products.find((product) => product.id === id)
    
    return res.json(product)
})

routes.put('/products/:id', (req, res) => {
    const { id } = req.params
    
    const { name, price } = req.body
    
    const productIndex = products.findIndex((product) => product.id === id)
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.json({ message: "Produto alterado com sucesso!" })
})

routes.delete('/products/:id', (req, res) => {
    const { id } = req.params

    const productIndex = products.findIndex((product) => product.id === id)

    products.splice(productIndex, 1)

    return res.json({ message: "Produto removido com sucesso!" })
})

module.exports = routes