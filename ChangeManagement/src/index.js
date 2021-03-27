import app from './express'

import config from '../config'

import mongoose from 'mongoose'



mongoose.Promise = global.Promise

mongoose.set("useCreateIndex", true)

mongoose.set("useNewUrlParser", true)

mongoose.connect(config.mongo)

mongoose.connection.on("error", () => {

    console.log(`Error connecting to database: ${config.mongo}`);

})

const izvjestaj = require('./routes/izvjestaj.route'); 

app.use('/izvjestaj', izvjestaj);

const uposlenikkomitet = require('./routes/uposlenikkomitet.route'); 

app.use('/uposlenikkomitet', uposlenikkomitet);

const uposlenikchange = require('./routes/uposlenikchange.route'); 

app.use('/uposlenikchange', uposlenikchange);

const promjena = require('./routes/promjena.route'); 

app.use('/promjena', promjena);

app.listen(config.port, (err) => {

    if (err) {

        console.log(err)

    } else {

        console.log("Server is listening on port "+config.port)

    }

})



export default app