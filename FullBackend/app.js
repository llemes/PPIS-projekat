const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const models = require('./models/index');
const config = require('./config/configuration.js')

// models.sequelize.sync();

const ulogaRoutes = require('./routes/uloga.router');
const kategorijaPromjeneRoutes = require('./routes/kategorijapromjene.router')
const dogadjajRoutes = require('./routes/dogadjaj.router')
const historijaDogadjajRoutes = require('./routes/historijadogadjaj.router')
const historijaPromjenaRoutes = require('./routes/historijapromjena.router')
const korisnikRoutes = require('./routes/korisnik.router')
const prioritetDogadjajaRoutes = require('./routes/prioritetdogadjaja.router')
const prioritetPromjeneRoutes = require('./routes/prioritetpromjene.router')
const promjenaRoutes = require('./routes/promjena.router')
const statusDogadjajaRoutes = require('./routes/statusdogadjaja.router')
const statusPromjeneRoutes = require('./routes/statuspromjene.router')
const tipDogadjajaRoutes = require('./routes/tipdogadjaja.router')
const authRoutes = require('./routes/auth.router')
const izvjestajRoutes = require('./routes/izvjestaj.router')

// configure middleware
//app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
app.use(cors());

//require('./routes')(app);

app.use('/uloga', ulogaRoutes);
app.use('/kategorijapromjene', kategorijaPromjeneRoutes)
app.use('/dogadjaj', dogadjajRoutes)
app.use('/historijadogadjaj', historijaDogadjajRoutes)
app.use('/historijapromjena', historijaPromjenaRoutes)
app.use('/korisnik', korisnikRoutes)
app.use('/prioritetdogadjaja', prioritetDogadjajaRoutes)
app.use('/prioritetpromjene', prioritetPromjeneRoutes)
app.use('/promjena', promjenaRoutes)
app.use('/statuspromjene', statusPromjeneRoutes)
app.use('/tipdogadjaja', tipDogadjajaRoutes)
app.use('/historijapromjena', historijaPromjenaRoutes)
app.use('/statusdogadjaja', statusDogadjajaRoutes)
app.use('/auth', authRoutes);
app.use('/izvjestaj', izvjestajRoutes);

//app.use('/problems', problemRoutes);
//app.use('/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;