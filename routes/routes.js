const express = require('express')
const router = express.Router()
const addMember = require('./members/addMember')
const allMembers = require('./members/allMembers')

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
// router.route('/all-users-homepage').get(allUsersHomePage)
// router.route('/delete-user').delete(deleteUser)
module.exports = router
