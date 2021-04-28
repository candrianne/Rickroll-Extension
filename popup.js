var sendToContent = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log("reloaded");
	  });
	});
}

var changeText = function() {
	if (localStorage.getItem("on") == "off") {
		document.getElementById("status").innerHTML = "Extension is: off";
		document.getElementById("change").innerHTML = "Turn on";
	}
	else {
		document.getElementById("status").innerHTML = "Extension is: on";
		document.getElementById("change").innerHTML = "Turn off";
	}
}
var changeCheatText = function() {
	if (localStorage.getItem("cheat") == "off") {
		document.getElementById("cheat").innerHTML = "Turn on cheat mode";
	}
	else {
		document.getElementById("cheat").innerHTML = "Turn off cheat mode";
	}
}
changeText();
changeCheatText();
document.getElementById("change").addEventListener("click", function() {
	console.log("clicked");
	 var port = chrome.extension.connect({
      name: "extension toggle"
	 });
	 port.postMessage("toggle");
	 port.onMessage.addListener(function(msg) {
	      console.log("message recieved: " + msg);
	      changeText();
	 });
	 sendToContent();
});
document.getElementById("cheat").addEventListener("click", function() {
	console.log("cheat mode");
	var port = chrome.extension.connect({
		name: "Cheat Mode"
	});
	port.postMessage("cheat");
	port.onMessage.addListener(function(msg) {
		console.log("message recieved: " + msg);
		changeCheatText();
	});
	//sendToContent();
});