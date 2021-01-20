import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
	res.send('Welcome to Relive-App API!!')
})

var PORT = process.env.PORT || 5000
const url = process.env.MONGO_URL

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
	)
	.catch((error) => console.log(`${error} : Did not connect!!`))

mongoose.set('useFindAndModify', false)
