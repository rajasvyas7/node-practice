var express = require('express');
var router = express.Router();
var public = require('../controllers/publicController');

/* GET home page. */
router.get('/', function(req, res, next) {
  public.index(req, res);
  // res.sendStatus(data);
});

module.exports = router;
