const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const db = require('./db/dbConfig')
require('dotenv').config()

const uri = process.env.DB_URL
const port = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)
app.get('/', (req, res) => {
  res.send(
    `Server Running on port:${port} 
    ${uri.includes('cluster0.42e2srw.mongodb.net/rof-investors')}`
  )
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
