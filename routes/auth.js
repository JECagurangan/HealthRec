const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth');
//route is only accessible through post method
router.post('/register', authController.register);

router.post('/login', authController.login);
module.exports = router;