import express from "express"
import 'dotenv/config'
import helmet from 'helmet'
import cors from 'cors'
import contactRouter from './src/routes/contact.route.js'
import professionnelRouter from './src/routes/professionnel.route.js'

const app = express()


app.use(express.json())
app.use(cors())
app.use(helmet())


app.use('/contact', contactRouter)
app.use('/professionnel', professionnelRouter)







export default app