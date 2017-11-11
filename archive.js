//This JavaScript file just sends the URL of the site you are on to archive.org's servers and throws it into the queue.
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://web.archive.org/save/"+location.href,true);
xhttp.send();
