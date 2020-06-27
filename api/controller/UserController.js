const Bcrypt = require('bcryptjs');

const User = require('../model/user');


// Save users when newly signed in.
exports.addUser = (req, res, next) => {
    const userName = req.query.userName;
    const password = req.query.password;
    const emailId = req.query.emailId;
    console.log(userName);

    //Encrypt the password before saving.
    Bcrypt.hash(password, 12).then(hashPassword => {
        const user = new User(userName, emailId, hashPassword);
        user.findByUserName().then(result => {
            if(result && result.length) {
                console.log(result);
                res.send('<h>Already Exist</h>');
            } else {
                user.save();
                res.redirect('/');
            }
            
        });
    }).catch(err => {
        console.log(err);
    });
};

// Checks whether the username is present.
exports.checkUserName = (req, res, next) => {
    const userName = req.query.userName;
    const user = new User();
    user.checkUserName(userName).then(result => {
        if(result && result.length) {
            console.log(result);
            res.send('<h>Already Exist</h>');
        } else {
            res.redirect('/');
        }
            
    });
};

// Checks whether the emailId is present.
exports.checkEmailId = (req, res, next) => {
    const emailId = req.query.emailId;
    const user = new User();
    user.checkEmailId(emailId).then(result => {
        if(result && result.length) {
            console.log(result);
            res.send('<h>Already Exist</h>');
        } else {
            res.redirect('/');
        }         
    });
};

exports.redirectMainMenu = (req, res, next) => {
    res.send('<form action="/check-emailid" method="GET">'
    + '<div><label for="userName">userName</label><input type="text" name="userName"></div>'
    + '<div><label for="emailId">emailId</label><input type="text" name="emailId"></div>'
    + '<div><label for="password">password</label><input type="text" name="password"></div>'
    + '<button type="submit">SignUp</button></form>');
}