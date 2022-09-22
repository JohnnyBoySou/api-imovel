import {
    request,
    response
} from "express"
import UserImobil from '../schemas/userImobilSchema.js'
import Imovel from '../schemas/imovelSchema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


class ImovelController {

    async addImovel(request, response) {
        try {
            const idExist = await Imovel.findOne({ id })       
            if(idExist) {
                return response.status(400).json({
                    error: "Ops",
                    message: 'Id already exists',
                });
            }

            const { title, id } = request.body;
            const imovel = await Imovel.create({
                id,
                title,
                created_user: request.userId
            });
            console.log('enviado')
            return response.send({
                imovel
            })

        } catch (error) {
            return response.status(500).send({
                error: 'error',
                message: error
            })
        }
    }

    async deleteImovel(request, response) {
        try {
            await Imovel.findByIdAndRemove(request.params.imovelId);
            return response.send();
          } catch (err) {
            return response.status(400).send({ error: 'Error deleting project' });
          }
    }


    async getImovel(request, response) {
        try {
            const imovel = await Imovel.findById(request.params.imovelId).populate(['imovel']);
            return response.send({
                imovel
            });
        } catch (err) {
            return response.status(400).send({
                error: 'Error loading imovel'
            });
        }
    }
    async listImovel(request, response) {
        try {
            const imovel = await Imovel.findById(request.params.imovelId).populate(['imovel']);
            return response.send({
                imovel
            });
        } catch (err) {
            return response.status(400).send({
                error: 'Error loading imovel'
            });
        }
    }
}


export default new ImovelController();