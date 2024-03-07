const mongoose = require('mongoose')

const balanceSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    fatherName: {
      type: String
    },
    memberId: {
      type: String
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: Number
    },
    address1: {
      type: String
    },
    address2: {
      type: String
    },
    fundSource: {
      type: String,
      required: true
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

module.exports = mongoose.model('balance', balanceSchema)
