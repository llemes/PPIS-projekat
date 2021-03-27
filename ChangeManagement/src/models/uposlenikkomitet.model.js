import mongoose from 'mongoose'

const UposlenikKomitet = mongoose.Schema({

    username: {
        type: String, 
        required: true,
        unique: 'Username already exists'
    },
    email: {

        type: String, trim: true, 
        required: 'Email is required!',
        unique: 'User already exists', 
        match: [/.+\@.+\..+/, 'Invalid email']

    },
    password: { type: String, required: true }

})


export default mongoose.model('UposlenikKomitet', UposlenikKomitet)