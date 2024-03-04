const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    fatherName: {
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
    }
  },
  { timestamps: true }
)

// Mongoose Model
module.exports = mongoose.model('member', membersSchema)
