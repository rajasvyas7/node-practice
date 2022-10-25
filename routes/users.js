const express = require('express');
const router = express.Router();
const public = require('../controllers/publicController');


router.get('/', function(req, res, next) {
  console.log('King Kohli');
  const data = {
    name: 'Rajas',
    location: 'Pune',
  };
  res.sendStatus(data);
});

router.post('/register', function(req, res, next) {
  public.register(req, res);
});

module.exports = router;
