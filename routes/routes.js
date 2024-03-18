const express = require('express')
const router = express.Router()
const addMember = require('./members/addMember')
const allMembers = require('./members/allMembers')
const addBalance = require('./balance/addBalance')
const getBalance = require('./balance/getBalance')
const newProject = require('./projects/newProject')
const allProjects = require('./projects/allProjects')
const membersDetails = require('./members/memberDetails')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

router.route('/member/add').post(addMember)
// router.route('/update-user').put(updateUser)
router.route('/all-members').get(allMembers)
router.route('/all-members/:id').get(membersDetails)
// router.route('/all-users-homepage').get(allUsersHomePage)
// router.route('/delete-user').delete(deleteUser)

router.route('/add-balance').post(addBalance)
router.route('/get-balance').get(getBalance)

router.route('/project/new').post(newProject)
router.route('/project/all').get(allProjects)

module.exports = router
