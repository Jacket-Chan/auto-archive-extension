var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://web.archive.org/save/"+location.href,true);
xhttp.send();
xhttp.open("GET","https://maker.ifttt.com/trigger/page_archived/with/key/cysTImCkywHvyn_o9_lYyu",true);
xhttp.send();
