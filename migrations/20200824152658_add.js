
exports.up = function(knex) {
  return knex.schema.table('shots', (table) => {
      table.string('type_dist')
  })
};

exports.down = function(knex) {
  return knex.schema.DropColumn('type_dist')
};
