//import Sequelize from 'sequelize';
const Sequelize = require('sequelize');
//import databaseConfig from '../config/database';
const databaseConfig = require('../config/database');
//import Aluno from '../models/Aluno';
const Aluno = require('../models/Aluno');
//import User from '../models/User';
const User = require('../models/User');
// import Foto from '../models/Foto';
const Foto = require('../models/Foto');

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
