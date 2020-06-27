const express = require('express');

const userController = require('../controller/UserController');

const router = express.Router();

//redirect to main page.
router.get('/', userController.redirectMainMenu);

//route to save the newly signed in user.
router.get('/user-signup', userController.addUser);

//route to check the userName.
router.get('/check-username', userController.checkUserName);

//route to check the emailId.
router.get('/check-emailid', userController.checkEmailId);

module.exports = router;