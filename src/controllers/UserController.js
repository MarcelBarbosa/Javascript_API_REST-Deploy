//import User from '../models/Aluno'
const User = require('../models/User.js');

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch(e) {
      return res.json(null);
    };
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch(e) {
      return res.json(null);
    };
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existente'],
        });
      };

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    };
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existente'],
        });
      };

      await user.destroy();
      return res.json(null);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    };
  }
}

module.exports = new UserController();
