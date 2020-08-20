
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('holes').del()
    .then(function () {
      // Inserts seed entries
      return knex('holes').insert([
        {round_id: 3, shot_id: 1},  
        {round_id: 3, shot_id: 2},       
        {round_id: 3, shot_id: 3},       
        {round_id: 3, shot_id: 4},      
        {round_id: 3, shot_id: 5},       
        {round_id: 3, shot_id: 6},      
        {round_id: 3, shot_id: 7},      
        {round_id: 3, shot_id: 8},      
        {round_id: 3, shot_id: 9},      
        {round_id: 3, shot_id: 10},      
        {round_id: 3, shot_id: 11},      
        {round_id: 3, shot_id: 12},      
        {round_id: 3, shot_id: 13},      
        {round_id: 3, shot_id: 14},      
        {round_id: 3, shot_id: 15},      
        {round_id: 3, shot_id: 16},      
        {round_id: 3, shot_id: 17},      
        {round_id: 3, shot_id: 18},      
        {round_id: 3, shot_id: 19},
        {round_id: 3, shot_id: 20},            
      ]);
    });
};
