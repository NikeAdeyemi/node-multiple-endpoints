const express = require('express')
const { allServices, getSingleService, updateService, deleteService } = require('../controllers/serviceController')

const router = express.Router()

router.get('/services', allServices)

router.get('/services/:id', getSingleService)

router.put('/services/:id', updateService)

router.delete('/services/:id', deleteService)








module.exports = router