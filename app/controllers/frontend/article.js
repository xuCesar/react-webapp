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

function detail(req, res, next, id) {
  console.log(id)
  // console.log(req.query)
  // console.log(req.body)
  // let { id } = req.query;
  Articles.findOne({
    where: { id }
  }).then(article => {
    if (article) {
      res.json(article)
    }
  }).catch(err => next(err))
}

function get(req, res) {
  return res.json(req.instance);
}

module.exports = {
  list,
  detail
}