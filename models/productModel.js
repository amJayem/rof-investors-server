const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: true
    },
    productQuantity: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    productWholesalePrice: {
      type: String
      // required: true
    },
    productRetailPrice: {
      type: String,
      required: true
    },
    note: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('product', productSchema)
