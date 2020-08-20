
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rounds').del()
    .then(function () {
      // Inserts seed entries
      return knex('rounds').insert([
        {id: 1, user_id: 1, course: 'Augusta National', round_date: new Date().toISOString()},
        {id: 2, user_id: 3, course: 'Bethpage Black', round_date: new Date().toISOString()},
        {id: 3, user_id: 3, course: 'Cypress Point', round_date: new Date().toISOString()}
      ]);
    });
};
