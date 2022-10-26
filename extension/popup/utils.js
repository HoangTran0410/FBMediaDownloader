export const getTabId = async () => {
  let tabArray = await chrome.tabs.query({ currentWindow: true, active: true });
  return tabArray[0].id;
};

export const runScript = async (func, tabId) => {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    // files: [scriptFile],
    func: func,
  });
};

export const runScriptInCurrentTab = async (func) => {
  const tabId = await getTabId();
  return await runScript(func, tabId);
};
