const productModel = require('../../models/productModel')

const productDetails = async (req, res) => {
  try {
    const id = req.params.id

    const findQuery = productModel.findById({ _id: id })
    const product = await findQuery.sort({ _id: -1 })

    res.status(200).json({ status: 200, data: product })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = productDetails
