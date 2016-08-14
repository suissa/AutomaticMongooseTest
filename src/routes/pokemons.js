const express = require('express')
const router = express.Router()
const PokemonModel = require('./models/pokemon')


router.post('/', (req, res, next) => {
  let mod = req.body
  PokemonModel.create(mod, function (err, data) {
    if (err) throw new Error(err)
    res.json(data)
  })
})


router.get('/', (req, res, next) => {
  
  PokemonModel.find({}, (err, data) => {
    if (err) throw new Error(err)
    res.json(data)
  })
})

router.get('/:id', (req, res, next) => {
  query = {_id: req.params.id}
  PokemonModel.findOne(query, function (err, data) {
    if (err) throw new Error(err)
    res.json(data)
  })
})


router.put('/:id', (req, res, next) => {
  query = {_id: req.params.id}
  let mod = req.body
  PokemonModel.update(query, mod, function (err, data) {
    if (err) throw new Error(err)
    res.json(data)
  })
})

router.delete('/:id', (req, res, next) => {
  query = {_id: req.params.id}
  PokemonModel.remove(query, function (err, data) {
    if (err) throw new Error(err)
    res.json(data)
  })
})



module.exports = router
