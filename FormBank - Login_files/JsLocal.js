	function openWindowOnNewTab(){
		//window.open('http://www.website.com/page');
		const url = 'https://www.google.com';
		const options = { animated: true, modal: false };

		 const message = {
    url,
    options
  };
		
		  window.webkit.messageHandlers.openWindow.postMessage(message);

		}
		
