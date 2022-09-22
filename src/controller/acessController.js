import { Router, request, response } from "express"
import bcrypt from 'bcryptjs'


import jwt from 'jsonwebtoken'

const router = Router()


router.get('/', (request, response) => {
    response.send({ ok: true})
})



const secretKey = "6714e405f4fd4deb3c096f82624179ca"


const authHeader = req.headers.authorization;
if(!authHeader){
    return response.status(401).send({error: 'No token priovided'});
}
const parts = authHeader.split(' ')
if(! (parts.lenght === 2) ){
    return response.status(401).send({error: 'No token priovided'});
}

const [ scheme, token ] = parts

if(/^Bearer$/i.test(scheme)){
    return response.status(401).send({ error: 'Token malformatted'})
}

jwt.verify(token, secretKey, (err, decoded) => {
    if(err) return response.status({error: 'Token invalided'})

    req.userId = decode.userId
})


class AcessController {
    
    async list (request, response, next) {
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
}



module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).send({error:"No token provided"})
    }else{
        const token = authHeader.replace('Bearer ','');
        console.log(token);
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return response.status(401).send({error:"token invalided"})
            }else{
                request.userId = decoded.id;
                return next()
            }   
        })
    }
}