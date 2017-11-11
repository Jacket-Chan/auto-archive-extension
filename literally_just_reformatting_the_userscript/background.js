chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.alexa == "gimme_tab_url")
      sendResponse({haveit: sender.tab.url});
  });
