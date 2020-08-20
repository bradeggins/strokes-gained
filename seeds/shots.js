
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shots').del()
    .then(function () {
      // Inserts seed entries
      return knex('shots').insert([
        {id: 1, dist_to_hole: 425, shot_from: 'T', holed: '', hole_number: 1},
        {id: 2, dist_to_hole: 125, shot_from: 'F', holed: '', hole_number: 1},
        {id: 3, dist_to_hole: 5, shot_from: 'G', holed: '', hole_number: 1},
        {id: 4, dist_to_hole: 2, shot_from: 'G', holed: true, hole_number: 1},
        {id: 5, dist_to_hole: 395, shot_from: 'T', holed: '', hole_number: 2},
        {id: 6, dist_to_hole: 122, shot_from: 'R', holed: '', hole_number: 2},
        {id: 7, dist_to_hole: 15, shot_from: 'S', holed: '', hole_number: 2},
        {id: 8, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 2},
        {id: 9, dist_to_hole: 155, shot_from: 'T', holed: '', hole_number: 3},
        {id: 10, dist_to_hole: 4, shot_from: 'G', holed: '', hole_number: 3},
        {id: 11, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 3},
        {id: 12, dist_to_hole: 356, shot_from: 'T', holed: '', hole_number: 4},
        {id: 13, dist_to_hole: 256, shot_from: 'RC', holed: '', hole_number: 4},
        {id: 14, dist_to_hole: 95, shot_from: 'R', holed: '', hole_number: 4},
        {id: 15, dist_to_hole: 12, shot_from: 'G', holed: '', hole_number: 4},
        {id: 16, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 5},
        {id: 17, dist_to_hole: 451, shot_from: 'T', holed: '', hole_number: 5},
        {id: 18, dist_to_hole: 200, shot_from: 'F', holed: '', hole_number: 5},
        {id: 19, dist_to_hole: 15, shot_from: 'S', holed: '', hole_number: 5},
        {id: 20, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number:5}
      ]);
    });
};
