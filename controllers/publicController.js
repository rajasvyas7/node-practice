const user = require('../models/Users');
const moment = require('moment');

class Public {
  async index(request, response) {
    response.sendStatus('Ok!! Node Server is up & running.');
  }

  async register(request, response) {
    const values = {...request.body, 'created_at': moment().format('YYYY-MM-DD HH:mm:ss')};
    console.log('values', values);
    const resp = await user.add(values);
    response.sendStatus({'message': `User registered with user-id ${resp}`});
  }
}

module.exports = new Public();
