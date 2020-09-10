
exports.up = function(knex) {
  return knex.schema.createTable('holes', (table) => {
      table.integer('round_id').references('rounds.id')
      table.integer('shot_id').references('shots.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('holes')
};
