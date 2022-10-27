const express = require('express');
const router = express.Router();
const pub = require('../controllers/publicController');


router.get('/', function(req, res, next) {
  const data = {
    name: 'Rajas',
  location: 'Pune',
  };
  res.sendStatus(data);
});

router.post('/register', function(req, res, next) {
  pub.register(req, res);
});

module.exports = router;
