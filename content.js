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
  xhttp.open("GET","https://pastebin.com/archive",true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(String(this.responseText));
      pastebin_data = this.responseText;
      pastebin_data = pastebin_data.split("\n");
      console.log(pastebin_data);
      pastebin_data = pastebin_data[142];
      console.log(pastebin_data);
      pastebin_data = pastebin_data[60]+pastebin_data[61]+pastebin_data[62]+pastebin_data[63]+pastebin_data[64]+pastebin_data[65]+pastebin_data[66]+pastebin_data[67]+pastebin_data[68];
      console.log(pastebin_data);
      pastebin_data = "https://pastebin.com"+pastebin_data;
      console.log(pastebin_data);
    }
  };
  xhttp.send();
});
