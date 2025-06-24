const router = require('express').Router()
const Contact = require('../models/contact')

// Obtener todos los contactos
router.get('/', async (req, res) => {
  const contacts = await Contact.find({})
  res.json(contacts)
})

// Crear un nuevo contacto
router.post('/', async (req, res) => {
  const { name, number, email, subject } = req.body

  const contact = new Contact({
    name,
    number,
    email,
    subject
  })

  const savedContact = await contact.save()
  res.status(201).json(savedContact)
})

module.exports = router