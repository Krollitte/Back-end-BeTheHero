const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionsController = require('./controllers/sessionsController');

routes.post('/sessions', sessionsController.store);
routes.post('/ongs',ongController.store);
routes.get('/ongs', ongController.index);

routes.post('/incidents', incidentsController.store);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);
routes.get('/profile', profileController.index);
module.exports = routes;