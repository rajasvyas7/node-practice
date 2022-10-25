var express = require('express');
var router = express.Router();
var public = require('../controllers/publicController');


router.get('/', function(req, res, next) {
  console.log('King Kohli');
  let data = {
    name: 'Rajas',
    location: 'Pune'
  };
  res.sendStatus(data);
});

router.post('/register', function(req, res, next) {
  public.register(req, res);
});

module.exports = router;
