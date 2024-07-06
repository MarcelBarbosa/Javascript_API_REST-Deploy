//import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();
const { resolve } = require('path');


//import'./database';
require('./database')

//import express from 'express';
const express = require('express');
//import homeRoutes from './routes/homeRoutes.js';
const homeRoutes = require('./routes/homeRoutes');
//import userRoutes from './routes/userRoutes.js';
const userRoutes = require('./routes/userRoutes');
//import tokenRoutes from './routes/tokenRoutes.js';
const tokenRoutes = require('./routes/tokenRoutes');
//import alunoRoutes from './routes/alunoRoutes.js';
const alunoRoutes = require('./routes/alunoRoutes');
//import fotoRoutes from './routes/fotoRoutes.js';
const fotoRoutes = require('./routes/fotoRoutes');


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname,'..', 'uploads', 'images')));

  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);

  }
}

//export default new App().app;
module.exports = new App().app;
