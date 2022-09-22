import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Test = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        index: true,
        auto: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    endereco: {
        bairro: String,
        rua: String,
        numero: String,
    },
    completed: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
});



const User = new mongoose.Schema({
   
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});


User.pre('save', async function(next){
    const hashedPassword = await bcrypt.hash(this.password, 12)
    this.password = hashedPassword;    
})

export default mongoose.model('User', User)
