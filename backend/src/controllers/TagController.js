const knex = require('../database')
module.exports = {
    async index(req, res) {
        const tags = await knex('tags')

        return res.json(tags)
    }
}