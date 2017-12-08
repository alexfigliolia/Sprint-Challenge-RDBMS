import knex from 'knex';

export const getContexts = (req, res) => {
	knex('contexts')
	.then(contexts => {
		res.status(200).json(contexts);
	})
	.catch(err => {
		res.status(500).json({'error': err});
	})
}

export const addContext = (req, res) => {
	const newContext = req.body;
	knex.insert(newContext).into('contexts')
	.then(suc => {
		res.status(200).json(suc);
	})
	.catch(err => {
		res.status(500).json({"error": err});
	})
}