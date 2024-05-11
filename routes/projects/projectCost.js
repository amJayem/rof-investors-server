const projectModel = require('../../models/projectModel')

const getProjectCost = async (req, res) => {
  try {
    const projectInfo = await projectModel.find()

    console.log(projectInfo)
    // Calculate the sum of all amounts
    const totalAmountCost = projectInfo.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.projectAmount)
    }, 0)
    res.status(200).json({ totalAmountCost, projectInfo })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
}

module.exports = getProjectCost
