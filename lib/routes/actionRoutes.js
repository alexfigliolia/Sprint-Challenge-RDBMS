import express from 'express';
import { getActions, addAction, updateAction } from '../controllers/actionControllers';

const actionRouter = (app) => {
	app.route('/actions').get(getActions).post(addAction);
	app.route('/actions/:id').put(updateAction);
}

export default actionRouter;