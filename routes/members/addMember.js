const membersSchema = require('../../models/membersModel.js')

const addMember = async (req, res) => {
  try {
    const data = req.body
    // console.log(data)
    const newMember = new membersSchema(data)
    const createdMember = await newMember.save()
    // console.log(result)
    res.status(201).send({ status: 201, createdMember })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = addMember
