//import { Router } from 'express';
const { Router } = require('express');
//import userController from '../controllers/UserController.js'
const userController = require('../controllers/UserController');
//import loginRequired from '../middlewares/loginRequired'
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

//Não deveriam existir
router.get('/', userController.index);    //Lista usuários
router.get('/:id', userController.show);  //Mostra um usuário

router.post('/',loginRequired, userController.store);
router.put('/:id',loginRequired, userController.update);

//Pode gerar transtornos
router.delete('/',loginRequired, userController.delete);

module.exports = router;

/*
index         => Lista todos os usuários (GET)
store/create  => Cria um novo usuário    (POST)
delete        => Apaga um usuário        (DELETE)
show          => Mostra um usuário       (GET)
update        => Atualiza um usuário     (PATCH ou PUT)
*/
