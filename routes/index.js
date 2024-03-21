const Router = require('express')
const router = new Router()

const authRouter = require('./auth.route')

router.use('/auth',authRouter)

module.exports = router