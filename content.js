/*var xhttp = new XMLHttpRequest();
var url;
chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  url = response.haveit;
  console.log(response.haveit);
});
xhttp.open("GET","https://web.archive.org/save/"+url,true);
xhttp.send();
xhttp.open("GET","https://maker.ifttt.com/trigger/http_request_test/with/key/cysTImCkywHvyn_o9_lYyu",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("value1="+url);*/
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
