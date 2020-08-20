
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Tiger', last_name: 'Woods', email: 'tiger@woods.com'},
        {id: 2, first_name: 'Brooks', last_name: 'Koepka', email: 'brooks@me.com'},
        {id: 3, first_name: 'Rory', last_name: 'McIlroy', email: 'rors@gmail.com'},
      ]);
    });
};
