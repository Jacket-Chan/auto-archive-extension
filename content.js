chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  var xhttp = new XMLHttpRequest();
  var url;
  url = response.haveit;
  xhttp.open("GET","https://web.archive.org/save/"+url,true);
  xhttp.setRequestHeader("Accept-Encoding","gzip, deflate, br");
  xhttp.setRequestHeader("Host","web.archive.org");
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3264.0 Safari/537.36");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.setRequestHeader("Connection","keep-alive");
  xhttp.send();
});
