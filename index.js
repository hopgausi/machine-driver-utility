var Client = require('node-rest-client').Client;
var URL = require('url').URL;

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    if(isNaN(m)){
        return num;
    }else{
        return Math.round(m) / 100 * Math.sign(num);
    }
}

let urls = []
function buildUrl(lisBaseURL, sampleID='', measureID='', result='') {
    if(sampleID && measureID){
        let newURL = new URL(lisBaseURL);
        newURL.searchParams.append('specimen_id', sampleID);
        newURL.searchParams.append('measure_id', measureID);
        newURL.searchParams.append('result', round(result));
        newURL.searchParams.append('dec',0);
        urls.push(newURL.href);   
    }
}
let count = 1;
function sendDataToIBLIS(urls, username, password){
    let credentials = {
        user: username,
        password: password
    }
    let client = new Client(credentials);
    if (urls.length > 0) {
        numberOfResults = urls.length;
        let url = urls[0];
        urls.shift();
        client.get(url, function(data, response){
            if (urls.length > 0) {
                sendDataToIBLIS(urls, username, password)
            }
        })
        if (numberOfResults == 1){
            console.log(`========= ${count} Results sent to IBLIS =================`);
        }
        count++;
    }
    else{
        console.log("=========No Results Sent to IBLIS==========")
    }
}

module.exports = {buildUrl, sendDataToIBLIS, urls}