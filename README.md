# Automatic Mongoose Test

Na última aula da Pós-graduação que dei em Umuarama, na faculdade Alfa, eu ensinei como fazer testes, principalmente usando o Mongoose e como percebi que ainda não havia criado um material mais completo sobre isso, estou fazendo-o agora.

## Problema

Quem trabalha com TDD realmente sabe o quão chato é fazer testes para CRUD e como sabemos essas funções devem ser padronizadas, então por que não automatizar esse processo?

## O Código

Vamos iniciar testando esse código **bem simples** que serve como uma **interface** para o nosso *Model* do Mogoose, onde usaremos as seguintes funções:

- Model.create(data, callback)
- Model.find(query,callback)
- Model.findOne(query,callback)
- Model.update(query, callback)
- Model.remove(query, callback)

Vamos nomear como *Controller* para facilitar o entendimento:

```js
'use strict'

const Model = require('./model')
const Controller = {
  create: function(data, callback) {
    Model.create(data, callback)
  },
  find: function(query, callback) {
    Model.find(query,callback)
  },
  findOne: function(query, callback) {
    Model.findOne(query,callback)
  },
  remove: function(query, callback) {
    Model.remove(query, callback)
  },
  updateOne: function(query, callback) {
    Model.update(query, callback)
  },
  updateMany: function(query, callback) {
    const mod = {multi: true} 
    Model.update(query, mod, callback)
  }
}

module.exports = Controller
```

## O Teste

Vamos padronizar nosso teste com essa estrutura:

```js
describe('Controller', (done) => {
  describe('CREATE', (done) => {
    before()
    it('Deve retornar o mesmo objeto com _id adicionado', (done) => {
      testCreate(done)
    })
    it('Deve retornar o mesmo objeto com as mesmas propriedades', (done) => {
      testCreate(done)
    })
    after()
  })
  describe('READ', (done) => {
    before()
    it('Deve retornar um Array VAZIO', (done) => {
      testFindEmpty(done)
    })
    it('Deve retornar um Array com 1 elemento', (done) => {
      // Primeiro cria 1 elemento para depois buscar
      // createOne()
      testFindOne(done)
    })
    it('Deve retornar um Array com mais de 1 elemento', (done) => {
      // Primeiro cria mais de 1 elemento para depois buscar
      // createOne()
      testFindMany(done)
    })
    after()
  })
  describe('UPDATE', (done) => {
    before()
    it('Deve retornar o objeto que confirma a alteração', (done) => {
      testUpdate(done)
    })
    after()
  })
  describe('DELETE', (done) => {
    before()
    it('Deve retornar o objeto que confirma a remoção', (done) => {
      testDelete(done)
    })
    after()
  })
}) 
```

### describe

É no `describe` que iremos descrever nossos testes, iniciamos com 1 `describe` que encapsula todos os testes:

```js
describe('Controller', (done) => {})
```

Para depois criarmos os testes de cada funcionalidade, que são:

```js
describe('CREATE', (done) => {})
describe('READ', (done) => {})
describe('UPDATE', (done) => {})
describe('DELETE', (done) => {})
```

Será dentro de cada `describe` desse que iremos colocar nossos testes específicos.

### it

Agora entramos nas especificações de cada teste, por exemplo:

```js
it('Deve retornar um Array VAZIO', (done) => {
  testFindEmpty(done)
})
```

No feedback retornado pelo mocha veremos cada `it` como uma lista de testes validados ou não

```
  Pokemon Controller
    READ
      1) Teste que não validou
      ✓ Teste que validou

  1 passing (81ms)
  1 failing

```

Vai me dizer que não é muito fácil de entender quando os testes são executados?

> Quanto melhor você descrever seu teste melhor ele será!

### before

A função do `before` será necessária para executarmos ações que deixarão o ambiente de testes na forma correta, por exemplo:

Preisamos limpar a base antes de fazer o teste de busca que retorna um *Array* vazio, então fazemos assim:

```js
before((done) => {
  Controller.remove({}, (err, data)=> done())
})
```

Ou refatorado:

```js
const removeAll = (done) => {
  Controller.remove({}, (err, data)=> done())
}

before(removeAll)
```

No caso sempre encpsularemos as lógicas em funções para reusarmos.

> Vamos padronizar que para **TODO** teste iremos limpar a base, **ANTES** de utilizar, usando a função mostrada acima.

### after

Já o `after` será responsável por *desfazer* as ações feitas anteriromente no `before` e nos `it`s anteriores, por exemplo:

Precisamos limpar a coleção após o teste de `CREATE` e para isso reusaremos a função `removeAll`:

```js
after(removeAll)
```

Vamos padronizar que para **TODO** teste iremos limpar a base usando a função mostrada acima

### done

Esse parâmetro/função é de suma importãncia para os testes assíncronos como o que faremos com o Mongoose.

```js
it('Deve retornar um Array VAZIO', (done) => {
  const query = {}
  const callback = (err, data) => {
    assert.equal(null, err, 'Erro não é nulo')
    assert.equal(0, data.length, 'Lista não veio vazia')
    done()
  }
  Controller.find(query, callback)
})
```

Caso eu não execute o `done()` receberemos o seguinte erro:

```
Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
```

Isso acontece porque o teste fica esperando sua finalização que só irá acontecer mediante a execução do `done()`, por isso **NUNCA ESQUECÇA DISSO**!

## CRUD

Sabemos que temos as seguintes funções:

- Create
- Read
- Update
- Delete


### Create

Para testarmos o `CREATE` iniciamos limpando a base de testes e depois faremos 2 testes padronizados:

- cadastrar 1 entidade
- cadastrar mais de 1 entidade, de preferência 5.


## Automatizaçao

### Charlatan

O [Charlantan](http://nodeca.github.io/charlatan/) é o módulo que usaremos para gerar valores aleatórios mas que sigam certas *regras*, por exemplo:

```js
const Charlatan = require('charlatan')

const name = require('pokemon-random-name')()
const attack = Charlatan.numerify('####') 
const defense = Charlatan.numerify('####')  

console.log('name', name)
console.log('attack', attack)
console.log('defense', defense)
```

> Percebeu que estou usandoo módulo `pokemon-random-name`?


Então como não existia uma função que gerasse nomes aleatórios para Pokemons eu criei o meu, ele está aqui [https://www.npmjs.com/package/pokemon-random-name](https://www.npmjs.com/package/pokemon-random-name)

> Usaremos esse método para não definirmos manualmente nenhum valor!



