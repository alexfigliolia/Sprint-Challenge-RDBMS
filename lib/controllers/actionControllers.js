import knex from 'knex';

export const getActions = (req, res) => {
	//pretend theres a user related query
	knex('actions')
	.then(actions => {
		res.status(200).json(actions);
	})
	.catch(err => {
		res.status(500).json({'error': err});
	});
}

export const addAction = (req, res) => {
	const newAction = req.body;
	knex.insert(newAction).into('actions')
	.then(success => {
		res.status(200).json(success);
	})
	.catch(err => {
		res.status(500).json({'error': err});
	});
}

export const updateAction = (req, res) => {
	const { id } = req.params;
	const update = req.body;
	const insertable = Object.assign({id: id}, update);
	knex('projects').where('id', id).update(insertable)
	.then(suc => {
		res.status(200).json(suc);
	})
	.catch(err => {
		res.status(500).json({'error': err});
	});
}