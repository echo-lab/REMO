


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


// Save stuff



var saveButton = document.getElementById('save');
saveButton.onclick = function () {


    saveTextAsFile();

};

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

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















