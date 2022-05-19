const express = require('express')

const routes = express.Router()

const { v4: uuidv4 } = require('uuid')

const TagController = require('./controllers/TagController')

const products = []

// route from tags
routes.get('/tags', TagController.index)
routes.post('/tags', TagController.create)
routes.put('/tags/:id', TagController.update)
routes.delete('/tags/:id', TagController.delete)

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