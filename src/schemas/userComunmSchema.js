import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserComunm = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});


UserComunm.pre('save', async function(next){
    const hashedPassword = await bcrypt.hash(this.password, 12)
    this.password = hashedPassword;    
})

export default mongoose.model('UserComunm', UserComunm)
