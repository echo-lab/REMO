


var box = document.getElementById('box');

// box.innerText = "Hello World";

console.log("test_background");

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "Exchange");
    port.onMessage.addListener(function(msg) {


        box.innerText += " " + msg.metadata + "\\\n";



    });
});


// var startButton = document.getElementById('start');
//
// var recordState = false;
//
//
//
// startButton.onclick = function () {
//
//
//     recordState = !recordState;
//     console.log(recordState);
//
// };

//
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//         console.log(response.farewell);
//     });
// });










