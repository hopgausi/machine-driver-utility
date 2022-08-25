var utils = require('./index');

lisBaseUrl = "http://localhost:8000/api/update_result"

utils.buildUrl(lisBaseUrl,220023,45,'67.995');
console.log(utils.urls)
utils.sendDataToIBLIS(utils.urls, 'user', 'password');

