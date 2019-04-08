

//this retrieves the TextArea element
let box = document.getElementById('box');




//This connects with the port from that is initiated in the content.js file
//If the start button has been pressed, then it will record the data from the port.
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "Exchange");
    port.onMessage.addListener(function(msg) {

        if(recordState)
        {
            box.innerText += " " + msg.metadata + "\\\n";
        }



    });
});



//This is the start/stop button and the record state is initially off or on stop.
let toggleButton = document.getElementById('toggle');
var recordState = false;




//This function changes the label of the toggle button and the record state.
toggleButton.onclick = function () {


    recordState = !recordState;
    toggleButton.value = recordState == true ? "Stop" : "Start";
    toggleButton.style.backgroundColor = recordState == true ? "red" : "green";



};


//This is the clear button from the DOM
let clearButton = document.getElementById('clear');


//The clear button simply clears the data in the text area.
clearButton.onclick = function () {


    box.innerText = "";

};


// Save button
var saveButton = document.getElementById('save');


saveButton.onclick = function () {


    saveTextAsFile();

};

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

//This saves the text area data into a text file
function saveTextAsFile() {
    var textToWrite = document.getElementById('box').innerText;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "metadata.txt";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}















