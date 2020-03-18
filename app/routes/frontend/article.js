const express = require('express')
const router = express.Router()

const articleController = require('@controllers/frontend/article')

router.route('/list').get(articleController.list)
router.route('/load').get(articleController.detail)


module.exports = router