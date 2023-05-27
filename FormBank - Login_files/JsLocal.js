	function openWindowOnNewTab() {
		//window.open('http://www.website.com/page');
		const url = 'https://www.google.com';
		const options = {
			animated: true,
			modal: false
		};

		const message = {
			url,
			options
		};
		if (window.webkit && window.webkit.messageHandlers) {
			f(window.webkit.messageHandlers.openWindow) {
			return	window.webkit.messageHandlers.openWindow.postMessage(message);
			}
			return this.changeLocation(url);
		}
		return window.open(url);
      
	}
