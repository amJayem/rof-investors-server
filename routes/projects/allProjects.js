const projectModel = require('../../models/projectModel')

const allProjects = async (req, res) => {
  try {
    const findQuery = projectModel.find()
    const allProject = await findQuery.sort({ _id: -1 })
    // Count all documents in the collection (without any query)
    const totalCount = await projectModel.countDocuments()
    res.status(201).json({ totalCount, allProject })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = allProjects
