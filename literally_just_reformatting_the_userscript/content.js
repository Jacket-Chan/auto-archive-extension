var xhttp = new XMLHttpRequest();
var url;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
});
xhttp.open("GET","https://web.archive.org/save/"+url,true);
xhttp.send();
xhttp.open("GET","https://maker.ifttt.com/trigger/http_request_test/with/key/cysTImCkywHvyn_o9_lYyu",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("value1="+location.href);
