import mongoose from 'mongoose'

const Promjena = mongoose.Schema({

    prihvacena: {
        type: Boolean
    },
    konacnaOdluka: {
        type: Boolean
    },
    poslano: {
        type: Boolean,
        required: true
    },
    opis: {
        type: Boolean,
        required: true
    },
    uposlenikChange: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'UposlenikChange'
    },
    uposlenikKomitet: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'UposlenikKomitet'
    }

})


export default mongoose.model('Promjena', Promjena)