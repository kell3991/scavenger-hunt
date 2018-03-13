// app.js
<<<<<<< HEAD
=======

//pull in dependencies
>>>>>>> 92743f067c54100a4a21343050755eb224321eb5
const express = require('express');
const bodyParser = require('body-parser');

//create app
const app = express();

//populate req.body with whatever users send
app.use(bodyParser.json());

<<<<<<< HEAD
// TODO Add require routers here
const usersRoutes = require('./routes/users.js');
app.use('/routes/users', usersRoutes);
// app.use('/somepath', require(./routes/somepath.js));
=======
// Add require routers
const usersRoutes = require('./routes/users.js');
app.use('/routes/users', usersRoutes);

const loginRoutes = require('./routes/login.js');
app.use('/login', loginRoutes);

>>>>>>> 92743f067c54100a4a21343050755eb224321eb5
app.use('/version', require('./routes/version.js'));
app.use('/signup', require('./routes/signup.js'));


// listen on port 3000
app.listen(3000, () => console.log('App is listening...'));
