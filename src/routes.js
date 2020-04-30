import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import MilitaryController from './app/controllers/MilitaryController';
import TreatmentController from './app/controllers/TreatmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/auth', SessionController.store);

// After this middleware all route must have token
routes.use(authMiddleware);

// Users Routes
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.index);

// Militaries Routes
routes.post('/militaries', MilitaryController.store);
routes.get('/militaries', MilitaryController.index);
routes.delete('/militaries/:id', MilitaryController.delete);
routes.put('/militaries/:id', MilitaryController.update);

// Treatment Routes
routes.post('/treatments/:military_id', TreatmentController.store);

export default routes;
