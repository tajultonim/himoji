chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const urlPattern =
      /^https:\/\/elb\.hilokal\.com\/group-calls\/[^/]+\/participants$/;
    if (urlPattern.test(details.url)) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
          const activeTab = tabs[0];
          const message = { data: details.url.split("/")[4] };
          chrome.tabs.sendMessage(activeTab.id, message);
        }
      });
    }
  },
  { urls: ["<all_urls>"] }
);
