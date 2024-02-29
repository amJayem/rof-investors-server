const express = require('express')
const router = express.Router()
const addMember = require('./members/addMember')

router.route('/add-user').post(addMember)
// router.route('/update-user').put(updateUser)
// router.route('/all-users').get(allUsers)
// router.route('/all-users-homepage').get(allUsersHomePage)
// router.route('/delete-user').delete(deleteUser)
module.exports = router
