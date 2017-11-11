var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://web.archive.org/save/"+location.href,true);
xhttp.send();
xhttp.open("GET","https://maker.ifttt.com/trigger/http_request_test/with/key/cysTImCkywHvyn_o9_lYyu",true);
xhttp.send();
