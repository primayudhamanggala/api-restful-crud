const db = require('../models')

module.exports = {
  create:(req, res) => {
    db.Memo.create(req.body)
    .then((memo) => {
      res.send(memo)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  getAll:(req, res) => {
    db.Memo.findAll()
    .then((memos) => {
      res.send(memos)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  getUpdate: (req, res) => {
    db.Memo.findOne({where: {id: req.params.id}})
    .then((memo) => {
      res.send(memo)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  update:(req, res) => {
    console.log('masuk');
    console.log(req.body);
    db.Memo.update(req.body, {where: {id: req.params.id}})
    .then((memo) => {
      res.send(memo)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  delete:(req, res) => {
    db.Memo.destroy({where: {id: req.params.id}})
    .then((memo) => {
      res.send(memo)
    })
    .catch((err) => {
      res.send(err.message)
    })
  }
}
