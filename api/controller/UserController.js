const User = require('../model/user');

// Save users when newly signed in.
exports.addUser = (req, res, next) => {
    const user = new User('Manibh2227', 'mani@gmail.com', 'manibh27');
    user.save();
};