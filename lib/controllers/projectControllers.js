import knex from 'knex';
knex({
  client: 'sqlite3',
  connection: {
    filename: './data/db.sqlite3'
  }
});

export const getProjects = (req, res) => {
	//pretend there is a user related query
	knex('projects')
	// .then(projects => {
	// 	res.status(200).json(projects);
	// })
	// .catch(err => {
	// 	res.status(500).json({'something went wrong': err});
	// })
}

export const addProject = (req, res) => {
	const newProject = req.body.project;
	knex.insert(newProject).into('projects')
	.then(projects => {
		res.status(200).send('successfully created a new project');
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}

export const updateProject = (req, res) => {
	const { id } = req.params;
	const update = req.body.update;
	const insertable = Object.assign({id: id}, update);
	knex('projects').where('id', id).update(insertable)
	.then(res => {
		res.status(200).json({'success': res});
	})
	.catch(err => {
		res.status(500).json({'something went wrong, its prob ur fault': err});
	}) 
}