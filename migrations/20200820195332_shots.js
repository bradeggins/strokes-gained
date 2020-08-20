
exports.up = function(knex) {
    return knex.schema.createTable('shots', (table) => {
        table.increments('id').primary()
        table.int('dist_to_hole')
        table.string('shot_from')
        table.boolean('holed')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shots')  
};
