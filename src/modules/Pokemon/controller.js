'use strict';

const Model = require('./model');
const Controller = {
  create: function(data, callback) {
    Model.create(data, callback);
  },
  find: function(query, callback) {
    Model.find(query,callback);
  },
  remove: function(query, callback) {
    Model.remove(query, callback)
  },
  update: function(query, mod, callback) {
    Model.update(query, mod, callback);
  },
};

module.exports = Controller;
