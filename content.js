chrome.runtime.sendMessage({alexa: "gimme_the_url"}, function(response) {
  var xhttp = new XMLHttpRequest();
  var url;
  var list = document;
  url = response.haveit;
  xhttp.open("GET","https://web.archive.org/save/"+url,true);
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
  grabLinks(list);
});
/*setInterval(function(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","https://pastebin.com/archive",true);
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");*/
  //xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  /*xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
  xhttp.onreadystatechange = function(){
    var list = this.responseText;
    grabLinks(list);
  };
},10000);*/
function grabLinks(/*list*/) {
  for (i = 0; i < /*list*/document.getElementsByTagName("a").length; i++) {
    archive(/*list,list*/document.getElementsByTagName("a")[i].href);
  }
  for (i = 0; i < /*list*/document.getElementsByTagName("script").length; i++) {
    archive(/*list,list*/document.getElementsByTagName("script")[i].src);
  }
  for (i = 0; i < /*list*/document.getElementsByTagName("link").length; i++) {
    archive(/*list,list*/document.getElementsByTagName("link")[i].href);
  }
  for (i = 0; i < /*list*/document.getElementsByTagName("script").length; i++) {
    archive(/*list,list*/document.getElementsByTagName("img")[i].src);
  }
}
function archive(/*page,*/url) {
  var xhttp = new XMLHttpRequest();
  var url = /*page*/document.baseURI;
  xhttp.open("GET","https://web.archive.org/save/"+String(url),true);
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
  if (url[url.length - 1] == "/") {
    xhttp.open("GET","https://web.archive.org/save/"+String(url+"../"+url),true);
  } else {
    xhttp.open("GET","https://web.archive.org/save/"+String(url+"/../"+url),true);
  }
  xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.9");
  xhttp.setRequestHeader("Upgrade-Insecure-Requests","1");
  xhttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
  xhttp.setRequestHeader("Cache-Control","max-age=0");
  xhttp.send();
}
