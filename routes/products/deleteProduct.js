const productModel = require('../../models/productModel')

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id

    const deletedProduct = await productModel.deleteOne({ _id: id })
    res.status(200).send({
      status: 200,
      message: 'Product Deleted!',
      data: deletedProduct
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = deleteProduct
