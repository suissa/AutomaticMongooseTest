const Charlatan = require('charlatan')

const name = require('pokemon-random-name')()
const attack = Charlatan.numerify('####') 
const defense = Charlatan.numerify('####')  

console.log('name', name)
console.log('attack', attack)
console.log('defense', defense)