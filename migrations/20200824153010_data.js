
exports.up = function(knex) {
  return knex.schema.createTable('data', (table) => {
      table.increments('id').primary
      table.string('typeDist')
      table.string('shotFrom')
      table.string('distToHole')
      table.decimal('strokesToHole', 2)
  })
    
};

exports.down = function(knex) {
  return knex.schema.dropTable('data')
};
