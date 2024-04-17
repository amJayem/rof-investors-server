const projectModel = require('../../models/projectModel')

const newProject = async (req, res) => {
  try {
    const data = req.body
    // console.log(data)
    const newProject = new projectModel(data)
    const createdProject = await newProject.save()
    // console.log(result)
    res.status(201).send({ status: 201, createdProject })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = newProject
