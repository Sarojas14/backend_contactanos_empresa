const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/contacts')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

// Agrega esta ruta antes de los endpoints de la API
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Contactos Empresa</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; text-align: center; margin-top: 80px; }
          .container { background: #fff; padding: 40px 30px; border-radius: 12px; box-shadow: 0 2px 8px #0002; display: inline-block; }
          h1 { color: #1976d2; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>API Contactos Empresa</h1>
          <p>Bienvenido a la API.<br>Puedes consumir los endpoints desde tu frontend.</p>
          <p>Endpoint de contactos: <code>/api/contacts</code></p>
        </div>
      </body>
    </html>
  `)
})

app.use('/api/contacts', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
