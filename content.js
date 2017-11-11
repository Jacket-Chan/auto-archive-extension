var xhttp = new XMLHttpRequest();
var url;
chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  url = response.haveit;
});
xhttp.open("GET","https://web.archive.org/save/"+url,true);
xhttp.send();
