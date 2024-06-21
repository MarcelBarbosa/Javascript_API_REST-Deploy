"use strict";//import multer from 'multer';
const multer = require('multer');
//import multerConfig from '../config/multerConfig'
const multerConfig = require('../config/multerConfig');
const Foto = require('../models/Foto');


const upload = multer(multerConfig).single('arquivoFoto');


class FotoController {
   store(req, res) {
    return upload(req, res, async (err) => {
      if(err) {
        return res.status(400).json({
          errors: [err.code],
        })
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id })
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['ALUNO inexistente']
        })
      }

    });
  }
}

module.exports = new FotoController();
