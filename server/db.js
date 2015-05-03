/*jshint node:true */
'use strict';

var config = require('config');
var q = require('q');
var r = require('rethinkdb');
require('rethinkdb-init')(r);

// Create Tables
r._init = r.init(config.get('rethinkdb'), [
  {
    name: 'messages',
    indexes: ['created']
  },
  {
    name: 'users',
    primaryKey: 'email'
  }
])
.then(function (conn) {
  r.conn = conn;
  r.conn.use(config.get('rethinkdb').db);
});

module.exports = r;
