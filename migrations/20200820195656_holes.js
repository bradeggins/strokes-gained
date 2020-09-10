
exports.up = function(knex) {
  return knex.schema.createTable('holes', (table) => {
      table.integer('round_id')
      table.integer('shot_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('holes')
};
