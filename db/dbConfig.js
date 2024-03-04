const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.DB_URL
mongoose
  .connect(uri)
  .then(() => console.log('db connected ->', uri))
  .catch((e) => console.error('Error!! db not connected => ', e.message))
// mongodb connect by mongoose end
