const axios = require("axios");

function getUser(userName){
  var queryUrl = 'https://api.github.com/users/' + userName;
    return axios({
      method: 'get',
      url: queryUrl,
      headers: {'Accept': 'application/vnd.github.inertia-preview+json',
      'Authorization' : '416086bf087562adcf1abb7f6c58954b004c2375 ='}
    })
}

module.exports = getUser;
