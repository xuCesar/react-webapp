const express = require('express')
const router = express.Router()

const articleController = require('@controllers/frontend/article')

router.route('/list').get(articleController.list)


module.exports = router