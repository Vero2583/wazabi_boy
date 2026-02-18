import express from 'express'
import { create, deleteById, getContact, getContactById, updateContactById} from '../controllers/contact.controller.js'


const router = express.Router()

router.get('/', getContact)
router.post('/', create)
router.get('/:data', getContactById)
router.put('/:data', updateContactById)
router.delete('/:data', deleteById)



export default router