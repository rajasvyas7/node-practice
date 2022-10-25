const express = require('express');
const router = express.Router();
const public = require('../controllers/publicController');

/* GET home page. */
router.get('/', function(req, res, next) {
  public.index(req, res);
  // res.sendStatus(data);
});

module.exports = router;
