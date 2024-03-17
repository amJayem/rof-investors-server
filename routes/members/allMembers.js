const membersModel = require('../../models/membersModel')

const allMembers = async (req, res) => {
  try {
    const findQuery = membersModel.find()
    const allUsers = await findQuery.sort({ _id: -1 })
    // Count all documents in the collection (without any query)
    const totalCount = await membersModel.countDocuments()
    res.status(200).json({ status: 200, totalCount, allUsers })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = allMembers
