



chrome.browserAction.onClicked.addListener(buttonClicked);


function buttonClicked(tab){

  let msg =
      {
        txt: "pressed"
      }

  chrome.tabs.sendMessage(tab.id, msg);


}
