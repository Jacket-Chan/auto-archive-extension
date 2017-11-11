var xhttp = new XMLHttpRequest();
var url;
chrome.runtime.sendMessage(undefined,"gimme_the_url",undefined, function(response) {
  url = response;
});
xhttp.open("GET","https://web.archive.org/save/"+url,true);
xhttp.send();
xhttp.open("GET","https://maker.ifttt.com/trigger/http_request_test/with/key/cysTImCkywHvyn_o9_lYyu",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("value1="+url);
