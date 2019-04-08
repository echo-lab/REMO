


let box = document.getElementById('box');



chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "Exchange");
    port.onMessage.addListener(function(msg) {

        if(recordState)
        {
            box.innerText += " " + msg.metadata + "\\\n";
        }



    });
});


let toggleButton = document.getElementById('toggle');

var recordState = false;



toggleButton.onclick = function () {


    recordState = !recordState;
    toggleButton.value = recordState == true ? "Stop" : "Start";
    toggleButton.style.backgroundColor = recordState == true ? "red" : "green";



};


let clearButton = document.getElementById('clear');




clearButton.onclick = function () {


    box.innerText = "";

};















