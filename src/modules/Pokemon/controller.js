'use strict';

const Model = require('./model');
const Controller = {
  create: function(data, callback) {
    Model.create(data, callback);
  },
  find: function(query, callback) {
    Model.find(query,callback);
  },
  findOne: function(query, callback) {
    Model.findOne(query,callback);
  },
  remove: function(query, callback) {
    Model.remove(query, callback)
  },
  updateOne: function(query, callback) {
    Model.update(query, callback);
  },
  updateMany: function(query, callback) {
    const mod = {multi: true} 
    Model.update(query, mod, callback);
  }
};

module.exports = Controller;
