const express = require('express');

const userController = require('../controller/UserController');

const router = express.Router();

//route to save the newly signed in user.
router.use('/user-signup', userController.addUser());

module.exports = router;