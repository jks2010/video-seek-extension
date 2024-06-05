
function videoSeek() {
  var theVideo = document.querySelector("video");
  var seekTime = 5;
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                event.preventDefault();

                vid_currentTime = theVideo.currentTime;
                theVideo.currentTime = vid_currentTime - seekTime;
                break;


            case 39:
                event.preventDefault();

                vid_currentTime = theVideo.currentTime;
                theVideo.currentTime = vid_currentTime + seekTime;
                break;

        }
  };
}


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: videoSeek
    }, _=>chrome.runtime.lastError);

  }
})
  
