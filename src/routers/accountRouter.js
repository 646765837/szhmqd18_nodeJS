const express = require('express');
const path = require('path');
var accountRouter = express.Router();
const accountCtrl = require(path.join(__dirname, "../controllers/accountController.js"))
accountRouter.get('/login', accountCtrl.getLoginPage);
accountRouter.get('/vcode', accountCtrl.getImageVcode);
accountRouter.get('/register', accountCtrl.getRegisterPage)
accountRouter.post('/register', accountCtrl.register)
accountRouter.post('/login', accountCtrl.login)
module.exports = accountRouter