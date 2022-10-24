const user = require('../models/Users');

class Public {
    async index(request, response)  {
        response.sendStatus('Ok!! Node Server is up & running.');
    }

    async register(request, response) {
        console.log('Pulic register', request.body);
        let values = {...request.body, 'created_at': '2022-10-24 02:25:25'}
        let resp = await user.add(values);
        console.log('Pulic register', resp);
        response.sendStatus('Registratrion in progress');
    }
}

module.exports =  new Public();