const balanceModel = require('../../models/balanceModel')

const getBalance = async (req, res) => {
  try {
    const balance = await balanceModel.find()
    // Calculate the sum of all amounts
    const totalAmount = balance.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount
    }, 0)
    res.status(201).json({ totalAmount, balanceInfo: balance })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = getBalance
