exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (action) => {
		action.increments('id');
		action.text('description');
		action.text('notes');
		action.boolean('completed').defaultTo(false);
		action.integer('projectId').references('id').inTable('projects');
		action.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
