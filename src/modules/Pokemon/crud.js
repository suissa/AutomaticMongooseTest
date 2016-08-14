'use strict'
// const PokemonModel = require('./model')
const Controller = require('./controller')

const CRUD = {
  create: (req, res) => {
    let mod = req.body
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    Controller.create(mod, cb)
  },
  find: (req, res) => {
    let query = {}
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    Controller.find(query, cb)
  },
  findOne: (req, res) => {
    let query = {_id: req.params.id}
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    Controller.findOne(query, cb)
  },
  update: (req, res) => {
    let query = {_id: req.params.id}
    let mod = req.body
    let cb =  function (err, data) {
      if (err) throw new Error(err)
      res.json(data)
    }
    Controller.update(query, mod, cb)
  },
  remove: (req, res) => {
    let query = {_id: req.params.id}
    let cb = (err, data) => {
      if (err) throw new Error(err)
      res.json(data)
    }
    Controller.remove(query, cb)
  },
}

module.exports = CRUD