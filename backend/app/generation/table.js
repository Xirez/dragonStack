const pool = require('../../databasePool');

class GenerationTable {
  static storeGeneration (generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        (error, responce) => {
          if (error) return reject(error);
  
          const generationId = responce.rows[0].id;

          resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationTable;