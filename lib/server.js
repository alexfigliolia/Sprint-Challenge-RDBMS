import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';
import actionRouter from './routes/actionRoutes';
import contextRouter from './routes/contextRoutes';
import projectRouter from './routes/projectRoutes';

const app = express();
app.use(bodyParser.json());
actionRouter(app);
contextRouter(app);
projectRouter(app);

knex({
  client: 'sqlite3',
  connection: {
    filename: './data/db.sqlite3'
  }
});

app.listen(3000, () => {
	console.log('app running on port 3000');
});