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
}