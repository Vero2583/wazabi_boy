import express from 'express'
import { validateRegister } from '../middleware/validation.middleware.js'
import { register } from '../controllers/auth.controller.js'

const router = express.Router()


router.post('/register', validateRegister, register)


export default router