import express from 'express'
import { create, getProf, getProfById, deleteById, updateProfById } from '../controllers/professionnel.controller.js'



const router = express.Router()

router.get('/', getProf)
router.post('/', create)
router.get('/:data', getProfById)
router.put('/:data', updateProfById)
router.delete('/:data', deleteById)



export default router