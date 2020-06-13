import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProfileController from './app/controllers/ProfileController';
import MilitaryController from './app/controllers/MilitaryController';
import TreatmentController from './app/controllers/TreatmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/auth', SessionController.store);

// After this middleware all route must have token
routes.use(authMiddleware);

// Profile Routes
routes.put('/profile', ProfileController.update);

// Users Routes
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

// Militaries Routes
routes.post('/militaries', MilitaryController.store);
routes.get('/militaries', MilitaryController.index);
routes.get('/militaries/:id', MilitaryController.show);
routes.delete('/militaries/:id', MilitaryController.delete);
routes.put('/militaries/:id', MilitaryController.update);

// Treatment Routes
routes.post('/treatments/:military_id', TreatmentController.store);
routes.get('/treatments/:military_id', TreatmentController.index);
routes.delete('/treatments/:id', TreatmentController.delete);


export default routes;
