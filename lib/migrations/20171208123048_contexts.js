exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', (context) => {
		context.increments('id');
		context.string('context', 128).notNullable();
		context.integer('actionId').notNullable().references('id').inTable('actions');
		context.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts')
};
