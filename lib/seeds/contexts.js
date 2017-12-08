
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'development', actionId: 1},
        {id: 2, context: 'development', actionId: 2},
        {id: 3, context: 'development', actionId: 3},
        {id: 4, context: 'development', actionId: 4},
        {id: 5, context: 'development', actionId: 5},
        {id: 6, context: 'marketing', actionId: 6},
        {id: 7, context: 'development', actionId: 7},
        {id: 8, context: 'development', actionId: 8},
      ]);
    });
};
