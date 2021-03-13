chrome.tabs.onCreated.addListener(tab=>{
    console.log(tab);
    chrome.tabs.get(tab.id,current_tab_info => {
        console.log(current_tab_info);
        if(/^https:\/\/www\.coingecko/.test(current_tab_info.pendingUrl)){         
            chrome.tabs.insertCSS(null,{file:'./mystyle.css'});
            chrome.tabs.executeScript(null,{file: './foreground.js'},()=>{console.log("injected")});
        }
    })
});

chrome.tabs.onActivated.addListener(tab=>{
    console.log(tab);
    chrome.tabs.get(tab.tabId,current_tab_info => {
        if(/^https:\/\/www\.coingecko/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null,{file:'./mystyle.css'});
            chrome.tabs.executeScript(null,{file: './foreground.js'},()=>{console.log("injected")});
        }
    })
});