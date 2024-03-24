const projectModel = require('../../models/projectModel')

const projectDetails = async (req, res) => {
  try {
    const id = req.params.id

    const findQuery = projectModel.findById({ _id: id })
    const project = await findQuery.sort({ _id: -1 })

    res.status(200).json({ status: 200, data: project })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = projectDetails
