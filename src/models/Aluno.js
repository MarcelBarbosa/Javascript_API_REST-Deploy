//import Sequelize, { Model } from 'sequelize';
const { Sequelize, Model } = require('sequelize');

module.exports = class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'NOME precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'SOBRENOME precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'EMAIL já existente'
        },
        validate: {
          isEmail: {
            msg: 'EMAIL inválido'
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'IDADE precisa ser um número inteiro'
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'PESO precisa ser um número inteiro ou decimal'
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'ALTURA precisa ser um número inteiro ou decimal'
          },
        },
      },
    }, {
      sequelize,
    })
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
  // REFERENCIA AO MODEL FOTO

}