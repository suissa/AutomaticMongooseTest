require('./../../../db/config.test')
const assert = require('assert')
const Controller = require('./../controller')

const removeAll = (done) => {
  Controller.remove({}, (err, data)=> done())
}

const createOne = (done) => {
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
}

const testCreateOne = (done) => {
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
}

describe('CREATE', (done) => {
  before(removeAll)
  it('No CREATE o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) => {
    testCreateOne(done)
  })
  after(removeAll)
})



