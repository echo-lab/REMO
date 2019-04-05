var port = chrome.runtime.connect({name: "Exchange"});
port.postMessage({firstMessage: "Hello"});
port.onMessage.addListener(function(msg) {
    if (msg.firstResponse == "Jordan Peele")
       console.log("Hello world");
});




//This keepsvar inputs, index;
var instructions = [];
var instructionsObject = {};

inputs = document.getElementsByTagName('input');

for (index = 0; index < inputs.length; ++index) {
    inputs[index].onblur = function () {
        port.postMessage({metadata: "inputId: "+this.id});
        //instructionsObject.put("instructions", instructions);
        // console.log("Type into the search bar where it reads" + "' "+this.placeholder+"' ");
        // console.log("The user typed in: " + this.value);
        // console.log("The input type was: " + this.type);

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