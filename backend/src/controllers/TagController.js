const knex = require('../database')
const { v4: uuidv4 } = require('uuid')

module.exports = {
    async index(req, res) {
        const tags = await knex('tags')
        return res.json(tags)
    },
    async create(req, res, next) {
        try {
            const { name } = req.body
            await knex('tags').insert({ id: uuidv4(), name })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            await knex('tags').update({ name }).where({ id }) 
            return res.send()
        } catch (error) {
            next(error)            
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('tags').where({ id }).del()
            return res.send()
        } catch (error) {
            next(error)
        }
    }
}