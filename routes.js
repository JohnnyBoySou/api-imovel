import { Router } from "express"
import UserController from "./src/controller/userController.js"
import ImovelController from "./src/controller/imovelController.js"
import authMiddleware from './src/middleware/auth.js'
import User from './src/schemas/userSchema.js'


const router = Router()

router.get('/',(request, response) => {
    response.send('Server On')
})
router.get('/users', UserController.find);

router.post('/register', UserController.register)



//REGISTER_EMPRESA -> REGISTER_USER
//REGISTER -> CREATE_IMOVEL
//LOGIN -> CREATE_IMOVEL 

//USER_COMUNM 
//GET/LIST IMOVEIS

//USER_EMPRESA
//GET/LIST/CREATE/DELETE/PUBLISH/




router.post('/register-imobil', UserController.register)



router.post('/authenticate', UserController.authenticate)

router.post('/find', UserController.authenticate)


router.post('/add-imovel', authMiddleware,  ImovelController.addImovel)

router.get('/get-imovel',  ImovelController.getImovel)

router.get('/list-imovel',  ImovelController.listImovel)


export default router;
