import { request, response } from "express"
import User from '../schemas/userSchema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



function generateToken( params = {} ) {
    const secretKey = "6714e405f4fd4deb3c096f82624179ca"
    return jwt.sign({ params }, secretKey, {
        expiresIn: 86400,
     })
}

class UserController {
    async find (response) {
        try{
            const users = await User.find()
            return response.json(users)
        }
        catch (error) {
            return response.status(500).send({
                error: 'find failed',
                message: response.error
            })
        }
    }

    async register(request, response) {
        
        const { email, password, name} = request.body
        try {
            const userExist = await User.findOne({ email })         

            if(userExist) {
                return response.status(400).json({
                    error: "Ops",
                    message: 'User already exists',
                });
            }

            const user = await User.create({email, password, name});
        
            return response.send({
                user,
                token: generateToken({ id: user.id })
        })

        } catch (error) {
            return response.status(500).send({error: 'error', message: error})
        }
    }



    async authenticate(request, response){
        const { email, password } = request.body

        const user = await User.findOne({ email }).select('+password');
   
        if(!user){
            return response.status(400).send({ error: 'Email not found'});}
       
        if(!await bcrypt.compare(password, user.password)){
             return response.status(400).send({ error: 'Invalid password'});}   


        user.password = undefined
     
        return response.send({ 
            user,
            token: generateToken({id: user.id}) 
        })}

}



 export default new UserController();