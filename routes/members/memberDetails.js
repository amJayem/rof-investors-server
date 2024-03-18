const membersModel = require('../../models/membersModel')

const membersDetails = async (req, res) => {
  try {
    const id = req.params.id

    const findQuery = membersModel.findById({ _id: id })
    const member = await findQuery.sort({ _id: -1 })

    res.status(200).json({ status: 200, member })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = membersDetails
