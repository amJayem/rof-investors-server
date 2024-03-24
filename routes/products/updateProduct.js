const productModel = require('../../models/productModel')

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body

    const updatedProductData = await productModel.findOneAndUpdate(
      { _id: id },
      data
    )
    res.status(201).send({
      status: 200,
      message: 'Product Updated!',
      data: updatedProductData
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = updateProduct
