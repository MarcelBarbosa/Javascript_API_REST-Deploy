const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function(req, res, next) {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({
      errors: ['LOGIN necessário'],
    });
  };

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if(!user) {
      return res.status(401).json({
        errors: ['USUÁRIO inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();

  } catch (e) {
    return res.status(401).json({
      errors: ['TOKEN expirado/inválido'],
    });
  };

};
