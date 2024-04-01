const membersModel = require('../../models/membersModel')
const balanceHistoryModel = require('../../models/balanceHistoryModel')

const membersDetails = async (req, res) => {
  try {
    const id = req.params.id

    const member = await membersModel.findById({ _id: id })
    // const member = await findQuery.sort({ _id: -1 })

    const balanceHistory = await balanceHistoryModel.find({
      email: member?.email
    })

    res.status(200).json({ status: 200, member, balanceHistory })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = membersDetails
