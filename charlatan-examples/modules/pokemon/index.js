const Pokemons = require('./pokemonsArray.json')

const randomPokemon = (total) => (Math.random() * total | 0) + 1
const RANDOM_POKEMON_INDEX = randomPokemon(Pokemons.length)

module.exports = Pokemons[RANDOM_POKEMON_INDEX]