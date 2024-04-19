const express = require('express')
const app = express()
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const serviceRoute = require('./routes/serviceRoute')

const fs = require('fs')
const port = 9999


const productPage = fs.readFileSync('./pages/productPage.html', 'utf-8')
const userPage = fs.readFileSync('./pages/userPage.html', 'utf-8')
const servicePage = fs.readFileSync('./pages/servicePage.html', 'utf-8')

app.get('/', (req, res) => {
    res.send(userPage, productPage, servicePage)
})

app.use(userRoute, productRoute, serviceRoute) 


app.use(express.json())


app.listen(port, () => {
    console.log(`Server is listening, click http://localhost:${port}`)
})
