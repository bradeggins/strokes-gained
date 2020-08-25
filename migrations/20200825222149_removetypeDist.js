
exports.up = function(knex) {
    return knex.schema.table('data', (table) => {
        table.dropColumn('typeDist')
    })
};

exports.down = function(knex) {
    return knex.schema.table('data', (table) => {
        table.string('typeDist')
    })  
};
