const express = require('express')
const routes = express.Router()
const knex = require('./database')

routes.get('/users', (req, res) => {
    knex('users').then((results) => {
        return res.json(results)
    })
})

routes.put('/users/:userId', async (req, res) => {
    const userId = req.params.userId
    const txCpf = req.body.tx_cpf
    console.log(userId, txCpf)
    const results = await update(userId, txCpf)
    console.log(results)
    return results ? res.json(results) : res.status(403).json({ message: 'not found'})

})

const update = async (userId, txCpf ) => {
    return knex('users').update({ tx_cpf: txCpf }).where('id', userId).returning('*')
}

module.exports = routes