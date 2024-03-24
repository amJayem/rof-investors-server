const projectModel = require('../../models/projectModel')

const updateProject = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body

    const updatedProjectData = await projectModel.findOneAndUpdate(
      { _id: id },
      data
    )
    res.status(201).send({
      status: 200,
      message: 'Project Updated',
      data: updatedProjectData
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = updateProject
