var express = require('express');
var router = express.Router();
var public = require('../controllers/public');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = public.index()
  res.sendStatus(data);
});

module.exports = router;
