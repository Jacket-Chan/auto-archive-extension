chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  var xhttp = new XMLHttpRequest();
  var url;
  var pastebin_data;
  url = response.haveit;
  xhttp.open("GET","https://web.archive.org/save/"+url,true);
  /*xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };*/
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
  grabScripts(url);
  grabLinks(url);
  grabCSS(url);
  grabImages(url);
});
function relativeURLFixer(baseurl,url) {
  return baseurl+"/../"+url;
}
function grabScripts(url) {
  for (i = 0; i < document.getElementsByTagName("script").length; i++) {
    var xhttp = new XMLHttpRequest();
    if (isURL("https://web.archive.org/save/"+String(document.getElementsByTagName("script")[i].src))) {
      xhttp.open("GET","https://web.archive.org/save/"+String(document.getElementsByTagName("script")[i].src),true);
      xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
      xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
      xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
      xhttp.setRequestHeader("Cache-Control","max-age=0");
      xhttp.send();
    } else {
      xhttp.open("GET","https://web.archive.org/save/"+relativeURLFixer(url,String(document.getElementsByTagName("script")[i].src)),true);
      xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
      xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
      xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
      xhttp.setRequestHeader("Cache-Control","max-age=0");
      xhttp.send();
    }
  }
}
function grabLinks(url) {
  for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    var xhttp = new XMLHttpRequest();
    if (isURL("https://web.archive.org/save/"+String(document.getElementsByTagName("a")[i].href))) {
      xhttp.open("GET","https://web.archive.org/save/"+String(document.getElementsByTagName("a")[i].href),true);
      xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
      xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
      xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
      xhttp.setRequestHeader("Cache-Control","max-age=0");
      xhttp.send();
    } else {
      xhttp.open("GET","https://web.archive.org/save/"+relativeURLFixer(url,String(document.getElementsByTagName("a")[i].href)),true);
      xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
      xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
      xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
      xhttp.setRequestHeader("Cache-Control","max-age=0");
      xhttp.send();
    }
  }
}
function grabCSS(url) {
  for (i = 0; i < document.getElementsByTagName("link").length; i++) {
    archive(document.getElementsByTagName("link")[i].href);
  }
}
function grabImages(url) {
  for (i = 0; i < document.getElementsByTagName("script").length; i++) {
    archive(document.getElementsByTagName("img")[i].src);
  }
}
function archive(baseurl,url) {
  xhttp.open("GET","https://web.archive.org/save/"+String(url),true);
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
  xhttp.open("GET","https://web.archive.org/save/"+String(baseurl+"/../"+url),true);
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
}
