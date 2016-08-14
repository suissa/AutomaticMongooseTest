'use strict'
const PokemonModel = require('./model')
const CRUD = require('./crud')

const Controller = {
  create: (req, res) => {
    console.log('Controller CREATE')
    let mod = req.body
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    CRUD.create(mod, cb)
  },
  find: (req, res) => {
    let query = {}
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    CRUD.find(query, cb)
  },
  findOne: (req, res) => {
    query = {_id: req.params.id}
    PokemonModel.findOne(query, function (err, data) {
      if (err) throw new Error(err)
      res.json(data)
    })
  },
  update: (req, res) => {
    query = {_id: req.params.id}
    let mod = req.body
    PokemonModel.update(query, mod, function (err, data) {
      if (err) throw new Error(err)
      res.json(data)
    })
  },
  remove: (req, res) => {
  query = {_id: req.params.id}
  PokemonModel.remove(query, function (err, data) {
    if (err) throw new Error(err)
    res.json(data)
  })
  },
}

module.exports = Controller