//import Sequelize, { Model } from 'sequelize';
const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

module.exports = class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo NOME deve ter entre 3 e 255 caracteres',
          },
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'EMAIL já existente'
        },
        validate: {
          isEmail: {
            msg: 'EMAIL inválido',
          },
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo SENHA deve ter entre 6 e 50 caracteres',
          },
        }
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if(user.password) {
      user.password_hash = await bcryptjs.hash(user.password, 8);
      };
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
