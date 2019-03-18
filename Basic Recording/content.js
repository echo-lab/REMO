


//focus is working with these websites at the moment:
// https://accounts.google.com/signup/v2/webcreateaccount?hl=en-AU&flowName=GlifWebSignIn&flowEntry=SignUp
// https://www.tumblr.com/register


var allLinks = document.links;





//Bind the event handler to each link individually
// for (var i = 0, n = allLinks.length; i < n; i++) {
//     allLinks[i].onclick = function () {
//         console.log("The user just clicked: " + this.text);
//         var newKey = "key"+i;
//         var newValue = "value"+i;
//
//         // instructions.push("The user just clicked: " + this.text);
//
//     };









function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


//This keeps track of the input forms.


var inputs, index;
var instructions = [];
var instructionsObject = {};

inputs = document.getElementsByTagName('input');

for (index = 0; index < inputs.length; ++index) {
    inputs[index].onblur = function () {
        instructions.push("form id:"+this.id);
        instructionsObject["The forms that the user focused on are:"] = instructions;
        //instructionsObject.put("instructions", instructions);
        // console.log("Type into the search bar where it reads" + "' "+this.placeholder+"' ");
        // console.log("The user typed in: " + this.value);
        // console.log("The input type was: " + this.type);

    };
}


chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendResponse)
{
    var myJSON = JSON.stringify(instructionsObject);
    downloadObjectAsJson(myJSON, "Instructions_List");
}




//This keeps track of the buttons that were clicked
// var buttons = document.getElementsByTagName('button');
// console.log("There are: "+buttons.length+" buttons.");
// for (var i = 0; i < buttons.length; i++) {
//     var button = buttons[i];
//     buttons[i].onclick = function () {
//         console.log("The button that says " + this.value +" was just clicked.");
//
//     };
//
// }



