hrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://web.archive.org/save/"+location.href,true);
    xhttp.send();
  }
})
