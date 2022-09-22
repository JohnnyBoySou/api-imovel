import { Router } from "express"
import UserController from "./src/controller/userController.js"
import ImovelController from "./src/controller/imovelController.js"
import authMiddleware from './src/middleware/auth.js'

const router = Router()

router.get('/',(request, response) => {
    res.send('Server On')
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


router.post('/registrar', async (request, response) => {
   
    try {
        const { email, password, name } = request.body
        console.log(email)
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
)

export default router;
