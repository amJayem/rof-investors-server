const express = require('express')
const router = express.Router()
const addMember = require('./members/addMember')

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
// router.route('/all-users').get(allUsers)
// router.route('/all-users-homepage').get(allUsersHomePage)
// router.route('/delete-user').delete(deleteUser)
module.exports = router