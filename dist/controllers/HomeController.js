"use strict";//import Aluno from '../models/Aluno'
const Aluno = require('../models/Aluno.js');

class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

module.exports = new HomeController();
