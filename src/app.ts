import express from 'express'

export const app = express()

// middlewares
app.use(express.json())

// public routes
app.use('/', (_, res) => res.send('Hello World!'))
