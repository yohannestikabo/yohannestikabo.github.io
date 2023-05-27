	function openWindowOnNewTab(){
		//window.open('http://www.website.com/page');
		const url = 'https://www.google.com';
		 const message = {
    url,
    options
  };
        const options = { animated: true, modal: false };
		  window.webkit.messageHandlers.openWindow.postMessage(message);

		}
		