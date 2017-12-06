const express = require('express')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/auth')

const server = express()

// Middleware
server.use(bodyParser.json()) // Allows JSON uploads (POST/PUT/PATCH)
server.use(authMiddleware.initialize) // Start passport

// Routes
server.use([
  require('./routes/products'),
  require('./routes/auth')
])

server.listen(7000, (error) => {
  if (error) {
    console.error('Error starting', error)
  } else {
    console.log('Server started at http://localhost:7000');
  }
})