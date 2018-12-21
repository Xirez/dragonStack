const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration.js');

const pool = new Pool(databaseConfiguration);

module.exports = pool;


/* Debugg code to test DB connection
pool.query('SELECT * FROM generation', (error, responce) => {
  if (error) console.log('error', error);

  console.log('responce.rows', responce.rows);
});*/