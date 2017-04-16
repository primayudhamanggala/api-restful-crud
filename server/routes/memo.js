const express = require('express');
const router = express.Router();
const memoController = require('../controllers/memo')

// router.get('/create', (req, res) => {
//   res.render('create')
// })

router.post('/', memoController.create)

router.get('/', memoController.getAll)

router.get('/update/:id', memoController.getUpdate)

router.post('/:id', memoController.update)

router.delete('/:id', memoController.delete)

module.exports = router;
