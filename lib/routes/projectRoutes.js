import { getProjects, addProject, updateProject } from '../controllers/projectControllers';

const projectRouter = (app) => {
	app.route('/projects').get(getProjects).post(addProject);
	app.route('/:id').put(updateProject);
}

export default projectRouter;

