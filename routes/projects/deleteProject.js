const projectModel = require('../../models/projectModel')

const deleteProject = async (req, res) => {
  try {
    const id = req.params.id

    const data = await projectModel.deleteOne({ _id: id })
    res.status(200).send({
      status: 200,
      message: 'Product Deleted!',
      data
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = deleteProject
