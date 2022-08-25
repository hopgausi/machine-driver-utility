# machine-driver-utility
Build IBLIS URLs from Lab machines and send data to IBLIS 

```// Import package
var utils = require('@hismalawi/machine-driver-utility');

// Build Urls
let baseURL = 'http:localhost:8000/api/update_result';
let sampleID = 123456;
let measureID = 45;
let result = '45.6721';

utils.buildUrl(baseURL, sampleID, measureID, result);

// Access urls i.e array of urls
let urls = utils.urls;

// Send data to iblis
let iblis_username = 'user';
let iblis_password = 'pass'
utils.sendDataToIBLIS(urls, iblis_username, iblis_password);
```
