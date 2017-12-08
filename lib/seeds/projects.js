
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Piperchat', 
          description: 'A mobile and web compatible video chat applications', 
          completed: false
        },
        {
          id: 2, 
          name: 'React', 
          description: 'Property management software that takes care of your accounting', 
          completed: false
        },
        {
          id: 3, 
          name: 'Skedge', 
          description: 'A real time employee scheduling application', 
          completed: false
        }
      ]);
    });
};
