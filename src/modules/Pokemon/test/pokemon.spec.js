require('./../../../db/config.test')
const assert = require('assert')
const Controller = require('./../controller')

describe('Pokemon Controller', () => {

  before( (done) => {
    Controller.remove({}, (err, data)=> done())
  })

  var msg1 = 'Quando iniciamos sem pokemons o FIND deve vir vazio'
  describe(msg1, () => {
    it('Deve retornar um Array VAZIO', (done) => {
      var query = {}
      var callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(0, data.length, 'Lista não veio vazia')
        done()
      }
      Controller.find(query, callback)
    })
  })
  describe('CREATE', () => {
    it('No CREATE o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) => {
      var mod = {
        name: 'TESTE',
        attack: 9001,
        defense: 8001
      }
      var callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal('object', typeof data._id)
        assert.equal('TESTE', data.name)
        assert.equal(9001, data.attack)
        assert.equal(8001, data.defense)
        done()
      }
      Controller.create(mod, callback)
    })
  })
}) 





// const expect = require('chai').expect;
// const ctrl = require('./pokemon-controller');

// describe('Controller of Pokemons', () => {
//   const pokemon = {
//     name        : 'Jean',
//     description : 'Pokemonzudo S2',
//     type        : 'Fire',
//     attack      : 85,
//     defense     : 85,
//     height      : 1.80
//   };

//   after(done => {
//     let Model = require('./pokemon-schema');
//     Model.remove({});
//     done();
//   });

//   describe('create a new polkemon', () => {
//     it('exprect a new pokmeno has created', done => {
//       ctrl.create(pokemon,(err,data) => {
//         /*jshint expr: true*/
//         expect(err).to.not.exist;
//         expect(data._id).to.exist;
//         expect(data.height).to.be.eq(1.8);
//         expect(data.defense).to.be.eq(85);
//         expect(data.attack).to.be.eq(85);
//         expect(data.type).to.be.eq('Fire');
//         expect(data.description).to.be.eq('Pokemonzudo S2');
//         expect(data.name).to.be.eq('Jean');
//         done();
//       });
//     });
//   });
// });
