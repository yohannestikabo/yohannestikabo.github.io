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
				console.log("1");
			return	window.webkit.messageHandlers.openWindow.postMessage(message);
			}
			console.log("2");
			return this.changeLocation(url);
		}
		console.log("3");
		return window.open(url);
      
	}
