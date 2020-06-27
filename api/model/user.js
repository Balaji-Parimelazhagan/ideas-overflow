const getDb = require('../Utils/database').getDb;

module.exports = class User {
    constructor(userName, emailId, passord) {
        this.userName = userName;
        this.emailId = emailId;
        this.passord = passord;
    }

    // Save the user model in DB.
    save() {
        const db = getDb();
        db.collection('users').insertOne(this).then (result => {
            console.log(result);
        });
    }

    // Find whether the username is present.
    findByUserName() {
        const db = getDb();
        return db.collection('users').find({userName: this.userName}).toArray();
    }

    // Find whether the username is present.
    checkUserName(enteredUserName) {
        const db = getDb();
        return db.collection('users').find({userName: enteredUserName}).toArray();
    }

    // Find whether the username is present.
    checkEmailId(enteredEmailId) {
        const db = getDb();
        return db.collection('users').find({emailId: enteredEmailId}).toArray();
    }
}