const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true
    },
    projectAmount: {
      type: Number,
      required: true
    },
    projectDetails: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('project', projectSchema)
