const membersSchema = require('../../models/membersModel.js')

const addMember = async (req, res) => {
  try {
    const data = req.body
    // console.log(data)
    const newMember = new membersSchema(data)
    const createdMember = await newMember.save()
    // console.log(result)
    res.status(201).send({ status: 201, data: createdMember })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = addMember

const updateMember = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    // console.log(data)
    // const newMember = new membersSchema(data)
    const updatedMemberData = await membersSchema.findOneAndUpdate(
      { _id: id },
      data
    )
    res.status(201).send({ status: 200, updatedMemberData, data })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = updateMember
