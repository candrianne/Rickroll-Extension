
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script: " + sender.tab.url :
                "from the extension");
    if (request.greeting == "extension") {
      sendResponse({farewell: localStorage.getItem("on")});
    }
    else if (request.greeting == "cheat") {
      sendResponse({farewell: localStorage.getItem("cheat")});
    }
  }
);

chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log("message recieved on background: " + msg);
        if (msg == "toggle") {
          if (localStorage.getItem("on") == "on") {
            console.log("EXTENSION IS NOW OFF");
            localStorage.setItem("on", "off");
          }
          else {
            console.log("EXTENSION IS NOW ON");
            localStorage.setItem("on", "on");
          } 
          port.postMessage(localStorage.getItem("on"));
        }
        else if (msg == "cheat") {
          if (localStorage.getItem("cheat") == "on") {
            console.log("CHEAT MODE IS NOW OFF");
            localStorage.setItem("cheat", "off");
          }
          else {
            console.log("CHEAT MODE IS NOW ON");
            localStorage.setItem("cheat", "on");
          }
          port.postMessage(localStorage.getItem("cheat"));
        }
    });
})