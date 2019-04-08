var port = chrome.runtime.connect({name: "Exchange"});
port.postMessage({firstMessage: "Hello"});
port.onMessage.addListener(function(msg) {
    if (msg.firstResponse == "Jordan Peele")
       console.log("Hello world");
});






var instructions = [];
var instructionsObject = {};



//This listens for input forms
inputs = document.getElementsByTagName('input');

for (index = 0; index < inputs.length; ++index) {
    inputs[index].onblur = function () {
        port.postMessage({metadata: "inputId: "+this.id});


    };
}






//This keeps track of the buttons that were clicked
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    buttons[i].onclick = function () {
        port.postMessage({metadata: "buttonId: "+this.id});

    };

}