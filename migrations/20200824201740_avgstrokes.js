
exports.up = function(knex) {
  return knex.schema.table('shots', (table) => {
      table.decimal('strokes_to_hole', 2)
  })
};

exports.down = function(knex) {
  return knex.schema.DropColumn('strokes_to_hole')
};
