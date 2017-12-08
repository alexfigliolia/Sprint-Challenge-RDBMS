exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (project) => {
		project.increments('id');
		project.string('name', 128).notNullable();
		project.text('description').notNullable();
		project.boolean('completed').notNullable().defaultTo(false);
		project.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
