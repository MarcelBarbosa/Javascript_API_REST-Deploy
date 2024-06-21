"use strict";//import { Router } from 'express';
const { Router } = require('express');
//import homeController from '../controllers/HomeController.js'
const homeController = require('../controllers/HomeController');

const router = new Router();

router.get('/', homeController.index);

module.exports = router;

