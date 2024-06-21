"use strict";//import { Router } from 'express';
const { Router } = require('express');
//import alunoController from '../controllers/AlunoController.js'
const alunoController = require('../controllers/AlunoController');
//import loginRequired from '../middlewares/loginRequired';
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

router.get('/', alunoController.index);
router.post('/',loginRequired, alunoController.store);
router.put('/:id',loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id',loginRequired, alunoController.delete);

module.exports = router;


