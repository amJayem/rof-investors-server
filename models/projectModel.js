const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    'project-name': {
      type: String,
      required: true
    },
    'project-amount': {
      type: Number,
      required: true
    },
    'project-details': {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('project', projectSchema)
