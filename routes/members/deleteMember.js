const membersModel = require('../../models/membersModel')

const deleteMember = async (req, res) => {
  try {
    const id = req.params.id
    const deletedProduct = await membersModel.deleteOne({ _id: id })
    res.status(200).send({
      status: 200,
      message: 'Member Deleted!',
      data: deletedProduct
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}
module.exports = deleteMember
