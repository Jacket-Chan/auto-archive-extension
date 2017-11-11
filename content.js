chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  var xhttp = new XMLHttpRequest();
  var url;
  url = response.haveit;
  xhttp.open("GET","https://web.archive.org/save/"+url,true);
  xhttp.send();
});
