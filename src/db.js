var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'admin',
      password : '789456123ke',
      database : 'kirito'
    }
  });

  module.exports = knex