
exports.up = function(knex) {
  return knex.schema.createTable('holes', (table) => {
      table.int('round_id').references('rounds.id')
      table.int('shot_id').references('shots.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('holes')
};
