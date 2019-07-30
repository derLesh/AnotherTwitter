chrome.runtime.onInstalled.addListener(function(activeTab) {
    var welcomeURL = "https://github.com/derLesh/AnotherTwitter/";
    chrome.tabs.create({ url: welcomeURL});
});