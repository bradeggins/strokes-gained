const path = require('path');
 
const seedFile = require('knex-seed-file');
 
exports.seed = function(knex, Promise) {
  knex('data').del()
    .then(() => seedFile(knex, path.resolve('./server/data/sgData12.csv'), 'data',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['shotFrom', 'distToHole', 'strokesToHole']
    }));
};
