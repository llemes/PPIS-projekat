import mongoose from 'mongoose'

const Izvjestaj = mongoose.Schema({

    sadrzaj: {
        type: String,
        required: true
    },

    poslano: {
        type: Boolean,
        required: true
    },

    uposlenikChange: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'UposlenikChange',
        required: true
    },

    uposlenikKomitet: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'UposlenikKomitet'
    }

})


export default mongoose.model('Izvjestaj', Izvjestaj)