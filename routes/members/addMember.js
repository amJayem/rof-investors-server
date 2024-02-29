const express = require('express')
const router = express.Router()
const membersSchema = require('../../models/membersModel.js')

const addMember = router.post('/add-member', async (req, res) => {
  try {
    const data = req.body
    const newUser = new membersSchema(data)
    const result = await newUser.save()
    // console.log(result)
    res.status(201).send(result)
    // console.log(result)
    // res.send(result)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addMember
