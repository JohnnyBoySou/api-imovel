import {request, response} from 'express'
import jwt from 'jsonwebtoken'
import imovelSchema from '../schemas/imovelSchema'
const secretKey = "6714e405f4fd4deb3c096f82624179ca"

import Imovel from '../schemas/imovelSchema'

const LikeMiddleware = (request, response, next) => {
  const authHeader = request.headers.authorization;
  
  if (!authHeader){
    console.log('sem token')
    return response.status(401).send({ error: 'No token provided atuheader vazio' });
  }
  const parts = authHeader.split(' ');
  

  if (!parts.length === 2){
    console.log('sem as duas partes')
    return response.status(401).send({ error: 'Token error' });
  }

  const [ scheme, token ] = parts;



  if (!(/^Bearer$/i).test(scheme)){
    console.log('não começa com bearer')
    return response.status(401).send({ error: 'Token malformatted' });
  }
  
  jwt.verify(token, secretKey, (err, decoded) => {
   
    if (err) {
      return response.status(401).send({ error: 'Token invalid' })
    }
    request.userId = decoded.params.id
    





    if (likeStatus === 1) {
      Imovel.updateOne({ id: request.params.id }, { $inc: { likeCount: +1 }, $pull: { likeUser: userId } })
          .then(() => {
              return Imovel.updateOne(
                  { id: request.params.id },
                  { $inc: { likeCount: +1 }, $pull: { likeUser: userId } }
              );
          })
          .then(() => {
              res.status(201).json({ message: ['Like has been canceled', 'Dislike has been canceled'] });
          })
          .catch((error) => res.status(400).json(error));
  }

  
  if (likeStatus === 0) {
    Imovel.updateOne({ id: request.params.id }, { $inc: { likeCount: -1 }, $pull: { likeUser: userId } })
        .then(() => {
            return Imovel.updateOne(
                { id: request.params.id },
                { $inc: { likeCount: +1 }, $pull: { likeUser: userId } }
            );
        })
        .then(() => {
            res.status(201).json({ message: ['Like has been canceled', 'Dislike has been canceled'] });
        })
        .catch((error) => res.status(400).json(error));
}
  });
};

export default authMiddleware 