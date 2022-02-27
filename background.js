chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        css: `
        .command {display: none !important;}
        .command.command-name-log {display: list-item !important;}
        `
    }, () => {
        console.log('css added');
    });
});

