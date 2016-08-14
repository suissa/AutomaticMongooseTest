'use strict';

const Model = require('./model');

const CRUD = {
  create: function(data, callback) {
    console.log('CRUD create')
    Model.create(data, callback);
  },
  find: function(query, callback) {
    Model.find(query,callback);
  },
  update: function(query, mod, options) {
    options = options || {};
    Model.update(query, mod, options, function (err, data) {
      if (err) {
        return console.log('ERRO: ', err);
      }
      return console.log('Alterou:', data);
    });
  },
  delete: function(query) {
    Model.remove(query, function (err, data) {
      if (err)  { 
        return console.log('ERRO: ', err);
      }
      return console.log('Deletou:', data);
    });
  },
};

module.exports = CRUD;
