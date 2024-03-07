const mongoose = require('mongoose')

const balanceHistorySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: Number
    },
    gender: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    note: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

// Mongoose Model
module.exports = mongoose.model('balanceHistory', balanceHistorySchema)
