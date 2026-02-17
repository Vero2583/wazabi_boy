import express from 'express'
import { create, getContact, getContactByData, updateContactByData, deleteByData} from '../controllers/contact.controller.js'


const router = express.Router()

router.get('/', getContact)
router.post('/', create)
router.get('/:data', getContactByData)
router.put('/:data', updateContactByData)
router.delete('/:data', deleteByData)



export default router