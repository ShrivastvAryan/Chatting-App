const{userLogin,userSignup}=require('../controllers/Auth-controller')

const express=require('express')
const app=express()
const router=express.Router()

app.use(express.json());

router.route('/login').post(userLogin)
router.route('/signup').post(userSignup)

module.exports=router