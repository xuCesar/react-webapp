const _ = require('lodash')
const asunc = require('async')
const models = require('@models')
const Op = models.sequelize.Op
const Articles = models.Articles

function list(req, res, next) {
  let {limit = 10, page = 1} = req.query;
  let skip = (page - 1) * limit;
  Articles.findAndCountAll({
    where: {},
    order: [['createdAt']],
    offset: skip,
    limit
  })
  .then(list => {
    res.json(list)
  })
  .catch(next)
}

function detail(req, res, next) {
  let { id } = req.params;
  console.log(id)
  Articles.findOne({
    where: { id }
  }).then(article => {
    if (article) {
      res.json({message: 'ok', data: article})
    } else {
      res.jsonWithBadRequest('文章不存在！')
    }
  }).catch(next)
}

function get(req, res) {
  return res.json(req.instance);
}

module.exports = {
  list,
  detail
}