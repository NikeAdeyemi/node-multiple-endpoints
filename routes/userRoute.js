const express = require('express')
const { createUser, allUsers, getSingleUser, deleteUser, updateUser } = require('../controllers/userController')


const router = express.Router()

router.post('/users', createUser)

router.get('/users', allUsers)

router.get('/users/:id', getSingleUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', updateUser)

module.exports = router
