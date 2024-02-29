const mongoose = require('mongoose')

// Mongoose Schema
const membersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    nameENG: {
      type: String,
      required: true
    },
    fatherName: {
      type: String
    },
    motherName: {
      type: String
    },
    memberId: {
      type: Number,
      unique: true,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    releaseStatus: {
      type: Boolean
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
