"use strict";//import Aluno from '../models/Aluno'
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if(!email || !password) {
      return res.status(401).json({
        errors: ['CREDENCIAIS inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if(!user) {
      return res.status(401).json({
        errors: ['USUÁRIO inexistente'],
      });
    }

    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['SENHA inválida'],
      });
    };

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

module.exports = new TokenController();