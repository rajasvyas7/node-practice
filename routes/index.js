const express = require('express');
const router = express.Router();
const pub = require('../controllers/publicController');

/* GET home page. */
router.get('/', function(req, res, next) {
  pub.index(req, res);
  // res.sendStatus(data);
});

module.exports = router;
