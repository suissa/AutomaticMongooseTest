const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
  name:  String,
  attack: Number,
  defense: Number
}
const pokemonSchema = new Schema(_schema)
module.exports = mongoose.model('Pokemon', pokemonSchema)