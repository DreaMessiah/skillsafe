const Router = require('express')
const router = new Router()

const authRouter = require('./users.route')
const filesRouter = require('./files.route')
const skillRouter = require('./skill.route')

router.use('/auth',authRouter)
router.use('/files',filesRouter)
router.use('/skill',skillRouter)

module.exports = router