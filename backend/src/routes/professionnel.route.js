import express from 'express'
import { create, getProf, getProfByData, deleteByData, updateProfByData } from '../controllers/professionnel.controller.js'



const router = express.Router()

router.get('/', getProf)
router.post('/', create)
router.get('/:data', getProfByData)
router.put('/:data', updateProfByData)
router.delete('/:data', deleteByData)



export default router