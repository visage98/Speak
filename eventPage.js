var menuItem = {
    "id" : "speak",
    "title" : "Speak",
    "contexts" : ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    console.log(clickData);
    
    if(clickData.menuItemId=="speak" && clickData.selectionText){
        console.log("HERE");
        
        chrome.tts.speak(clickData.selectionText, {"rate" : 0.7})
    }
})