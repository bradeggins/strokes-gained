
exports.up = function(knex) {
    return knex.schema.table('shots', (table) => {
        table.int('hole_number')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropColumn('hole_number')
  
};
