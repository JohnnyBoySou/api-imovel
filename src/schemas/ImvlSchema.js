import mongoose from 'mongoose'

const Imovel = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        index: true,
        auto: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
      },
    
    
    valor: {
        required: true,
        type: String
    },
    tipo: {
        required: true,
        type: String
    },
    item1: {
        type: String
    },
    qtd1: {
        type: String
    },
    item2: {
        type: String
    },
    qtd2: {
        type: String
    },
    taxas: [{
        type: String
    }],
    infraestrutura: [{
        type: String
    }],
    conservacao: {
        type: String
    },
    area: {
        type: String
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
    created_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserImobil',
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});



export default mongoose.model('Imovel', Imovel)
