
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1, 
          description: 'Clean up code base',
          notes: 'extract methods in render into helper functions',
          projectId: 2
        },
        {
          id: 2, 
          description: 'Prevent warping of local video stream',
          notes: 'call getUserMedia when exiting chat',
          projectId: 1
        },
        {
          id: 3, 
          description: 'Improve accounting view',
          notes: 'create an ouput to pdf/word doc',
          projectId: 2
        },
        {
          id: 4, 
          description: 'Rebuild messenger',
          notes: 'create a more secure data structure',
          projectId: 2
        },
        {
          id: 5, 
          description: 'Implement cloudinary',
          notes: 'photo storage that never touches our servers',
          projectId: 2
        },
        {
          id: 6, 
          description: 'Work on branding',
          notes: 'needs a name',
          projectId: 2
        },
        {
          id: 7, 
          description: 'Build native apps for owners and employees',
          notes: 'webapps are only as convenient as the mobile browser it runs in',
          projectId: 2
        },
        {
          id: 8, 
          description: 'Validation for incoming schedule data',
          notes: 'typos can break the data-viz',
          projectId: 3
        },
      ]);
    });
};
