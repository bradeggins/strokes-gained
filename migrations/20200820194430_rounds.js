
exports.up = function(knex) {
    return knex.schema.createTable('rounds', (table) => {
        table.increments('id').primary
        table.int('user_id').references('users.id')
        table.string('course')
        table.date('round_date')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('rounds')  
};
