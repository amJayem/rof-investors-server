const express = require('express')
const router = express.Router()
const addMember = require('./members/addMember')
const allMembers = require('./members/allMembers')
const addBalance = require('./balance/addBalance')
const getBalance = require('./balance/getBalance')
const newProject = require('./projects/newProject')
const allProjects = require('./projects/allProjects')
const membersDetails = require('./members/memberDetails')
const updateMember = require('./members/addMember')
const projectDetails = require('./projects/projectDetails')
const updateProject = require('./projects/updateProject')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

router.route('/member/add').post(addMember)
router.route('/member/update/:id').put(updateMember)
router.route('/all-members').get(allMembers)
router.route('/all-members/:id').get(membersDetails)
// router.route('/all-users-homepage').get(allUsersHomePage)
// router.route('/delete-user').delete(deleteUser)

router.route('/add-balance').post(addBalance)
router.route('/get-balance').get(getBalance)

router.route('/project/new').post(newProject)
router.route('/project/all').get(allProjects)
router.route('/project/:id').get(projectDetails)
router.route('/project/update/:id').put(updateProject)

module.exports = router
