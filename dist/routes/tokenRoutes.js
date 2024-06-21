"use strict";//import { Router } from 'express';
const { Router } = require('express');
//import tokenController from '../controllers/TokenController.js'
const tokenController = require('../controllers/TokenController');

const router = new Router();

router.post('/', tokenController.store);

module.exports = router;
