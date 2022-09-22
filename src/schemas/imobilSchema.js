import mongoose from 'mongoose'

const Imobil = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        index: true,
        auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
    },
    descricao: {
        type: String
    },

    bairro: {
        type: String,
    },
    rua: {
        type: String,
    },
    numero: {
        type: String,
    },
    nota: {
        type: Number,
    },
    creci: {
        type: String, 
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    funcionarios: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserImobil'
    }
});



export default mongoose.model('Imobil', Imobil)
