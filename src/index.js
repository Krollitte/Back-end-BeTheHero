const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
/**
 * rota / recurso
 * 
 * Métodos HTTP:{
 *  GET: Buscar Informação do back-end
 *  POST: Criar Informação no back-end
 *  PUT: Alterar uma informação no back-end
 * }
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' e servem para filtros e paginação;
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
 * 
 * Bancos de Dados:{
 *  SQL: MySQL, SQLite, PostgreSQL;
 *  NoSQL: MongoDB, couchDB, etc
 * }
 * 
 * Driver: SELECT * FROM users;
 * Query Builder: table('users).select('*').where()
 * 
 */




app.listen(3333);