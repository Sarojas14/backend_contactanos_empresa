const router = require('express').Router()
const Contact = require('../models/contact')

// Obtener todos los contactos
router.get('/', async (req, res) => {
  const contacts = await Contact.find({})
  res.json(contacts)
})

// Puedes agregar más rutas aquí (POST, PUT, DELETE, etc.)

module.exports = router