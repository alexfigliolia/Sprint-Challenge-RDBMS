import { getContexts, addContext } from '../controllers/contextControllers';

const contextRouter = (app) => {
	app.route('/contexts').get(getContexts).post(addContext);
};

export default contextRouter;