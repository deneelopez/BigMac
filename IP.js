const Axios = require('axios');


var getUserCountry = (userIP, cb) => {

  var options = {
    url: 'https://ipvigilante.com',
    path: '/8.8.8.8' || userIP,
    port : 443,
    method : 'GET',
    headers: {'User-Agent': 'request'}
  };

  Axios(options)
    .then (res => {
      cb(null, res.data);
    })
    .catch(err => {
      cb(err, null);
    });

};

module.exports.getUserCountry = getUserCountry;