const productModel = require('../../models/productModel')

const newProduct = async (req, res) => {
  try {
    const data = req.body
    const newProduct = new productModel(data)
    const createdProduct = await newProduct.save()
    res
      .status(201)
      .send({ status: 201, message: 'New product added', createdProduct })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = newProduct
