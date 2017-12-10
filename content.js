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
  xhttp.open("GET",url,true);
  xhttp.send();
  grabScripts();
  xhttp.onreadystatechange = function(){

  };
});
function isURL(url) {
  //Takes in a string and returns a boolean based on if the string is an active URL
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET",url,true);
  xhttp.send();
  var output;
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4&&this.status == 200) {
      output = true;
    } else {
      output = false;
    }
  };
  return output;
}
function isRelativeURL(baseurl,url) {
  //This function takes in a baseurl, or the url the possibly relative URL was grabbed from, and the relative URL and returns a boolean
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET",baseurl+"/../"+url,true);
  var output;
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4&&this.status == 200) {
      output = true;
    } else {
      output = false;
    }
  };
  return output;
}
function relativeURLFixer(baseurl,url) {
  return baseurl+"/../"+url;
}
function grabScripts() {
  var scriptelements = document.getElementsByTagName("script");
  for (i = 0; i < scriptelements.length; i++) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://web.archive.org/save/"+String(list.getElementsByTagName("script")[i].src),true);
    xhttp.send();
  }
}
function grabLinks() {
  var linkelements = document.getElementsByTagName("a");
  for (i = 0; i < linkelements.length; i++) {
    var xhttp = new XMLHttpRequest();
    
  }
}
