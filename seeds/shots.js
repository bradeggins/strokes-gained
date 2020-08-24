
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shots').del()
    .then(function () {
      // Inserts seed entries
      return knex('shots').insert([
        {id: 1, dist_to_hole: 425, shot_from: 'T', holed: '', hole_number: 1, strokes_to_hole:4.2 },
        {id: 2, dist_to_hole: 125, shot_from: 'F', holed: '', hole_number: 1, strokes_to_hole:2.9},
        {id: 3, dist_to_hole: 5, shot_from: 'G', holed: '', hole_number: 1, strokes_to_hole:1.8},
        {id: 4, dist_to_hole: 2, shot_from: 'G', holed: true, hole_number: 1, strokes_to_hole:1.42},
        {id: 5, dist_to_hole: 395, shot_from: 'T', holed: '', hole_number: 2, strokes_to_hole: 4.06},
        {id: 6, dist_to_hole: 122, shot_from: 'R', holed: '', hole_number: 2, strokes_to_hole:3.13},
        {id: 7, dist_to_hole: 15, shot_from: 'S', holed: '', hole_number: 2, strokes_to_hole:2.49},
        {id: 8, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 2, strokes_to_hole:1.04},
        {id: 9, dist_to_hole: 155, shot_from: 'T', holed: '', hole_number: 3, strokes_to_hole: 3.02},
        {id: 10, dist_to_hole: 4, shot_from: 'G', holed: '', hole_number: 3, strokes_to_hole:1.71},
        {id: 11, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 3, strokes_to_hole: 1.04},
        {id: 12, dist_to_hole: 356, shot_from: 'T', holed: '', hole_number: 4, strokes_to_hole: 3.97},
        {id: 13, dist_to_hole: 256, shot_from: 'RC', holed: '', hole_number: 4, strokes_to_hole:4.1},
        {id: 14, dist_to_hole: 95, shot_from: 'R', holed: '', hole_number: 4, strokes_to_hole:3.03},
        {id: 15, dist_to_hole: 12, shot_from: 'G', holed: '', hole_number: 4, strokes_to_hole:2.05},
        {id: 16, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number: 5, strokes_to_hole:1.04},
        {id: 17, dist_to_hole: 451, shot_from: 'T', holed: '', hole_number: 5, strokes_to_hole: 4.36},
        {id: 18, dist_to_hole: 200, shot_from: 'F', holed: '', hole_number: 5, strokes_to_hole: 3.31},
        {id: 19, dist_to_hole: 15, shot_from: 'S', holed: '', hole_number: 5, strokes_to_hole:2.49},
        {id: 20, dist_to_hole: 1, shot_from: 'G', holed: true, hole_number:5, strokes_to_hole:1.04}
      ]);
    });
};
