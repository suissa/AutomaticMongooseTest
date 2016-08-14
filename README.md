# Automatic Mongoose Test

Na última aula da Pós-graduação que dei em Umuarama, na faculdade Alfa, eu ensinei como fazer testes, principalmente usando o Mongoose e como percebi que ainda não havia criado um material mais completo sobre isso, estou fazendo-o agora.

## Problema

Quem trabalha com TDD realmente sabe o quão chato é fazer testes para CRUD e como sabemos essas funções devem ser padronizadas, então por que não automatizar esse processo?

## O Teste

```js
describe('Controller', () => {
  describe('CREATE', () => {
    before()
    it('Deve retornar o mesmo objeto com _id adicionado', (done) => {
      testCreate(done)
    })
    after()
  })
  describe('READ', () => {
    before()
    it('Deve retornar um Array VAZIO', (done) => {
      testFind(done)
    })
    it('Deve retornar um Array com 1 elemento', (done) => {
      // Primeiro cria 1 elemento para depois buscas
      // createOne()
      testFind(done)
    })
    it('Deve retornar um Array com mais de 1 elemento', (done) => {
      // Primeiro cria 1 elemento para depois buscas
      // createOne()
      testFind(done)
    })
    after()
  })
  describe('UPDATE', () => {
    before()
    it('Deve retornar um Array VAZIO', (done) => {
      testUpdate(done)
    })
    after()
  })
  describe('DELETE', () => {
    before()
    it('Deve retornar um Array VAZIO', (done) => {
      testDelete(done)
    })
    after()
  })
}) 
```

Vamos padronizar nosso teste com essa estrutura

## CRUD

Sabemos que temos as seguintes funções:

- Create
- Read
- Update
- Delete


### Create

Para testarmos

