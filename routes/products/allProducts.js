const productModel = require('../../models/productModel')

const allProducts = async (req, res) => {
  try {
    const findQuery = productModel.find()
    const allProducts = await findQuery.sort({ _id: -1 })
    // Count all documents in the collection (without any query)
    const totalCount = await productModel.countDocuments()
    res.status(200).json({ status: 200, totalCount, allProducts })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = allProducts
