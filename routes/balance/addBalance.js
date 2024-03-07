const balanceHistoryModel = require('../../models/balanceHistoryModel')
const balanceModel = require('../../models/balanceModel')

const addBalance = async (req, res) => {
  try {
    const data = req.body
    // console.log(data)
    const memberId = data?.memberId
    // const newBalance = new balanceModel(data)
    const existingBalance = await balanceModel.findOne({ memberId })

    if (existingBalance) {
      existingBalance.amount += data.amount // Update this line based on your actual data structure
      await existingBalance.save()
    } else {
      const newBalance = new balanceModel(data)
      await newBalance.save()
    }

    const newBalance = new balanceHistoryModel(data)
    const balanceInfo = await newBalance.save()
    // console.log(result)
    res.status(201).send({ status: 201, data: balanceInfo })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = addBalance
