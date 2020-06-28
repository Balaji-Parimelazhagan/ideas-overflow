const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./route/userRoute');
const mongoConnect = require('./Utils/database').mongoConnect;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(userRoutes);


// After connecting to DB the server listen to the port 3000.
mongoConnect ( () => {
    app.listen(3000);
});
