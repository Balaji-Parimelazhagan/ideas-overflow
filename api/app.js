const express = require('express');

const userRoutes = require('./route/userRoute');
const mongoConnect = require('./Utils/database').mongoConnect;

const app = express();

app.use(userRoutes);

mongoConnect ( () => {
    app.listen(3000);
});
