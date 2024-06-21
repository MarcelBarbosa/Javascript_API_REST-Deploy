"use strict";//import { Router } from 'express';
const { Router } = require('express');
//import fotoController from '../controllers/FotoController.js'
const fotoController = require('../controllers/FotoController');
const loginRequired = require('../middlewares/loginRequired');


const router = new Router();
router.post('/',loginRequired, fotoController.store);

module.exports = router;

