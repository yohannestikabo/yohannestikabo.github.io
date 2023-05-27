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
		if ((window as any).webkit && (window as any).webkit.messageHandlers) {
			f((window as any).webkit.messageHandlers.openWindow) {
			return	(window as any).webkit.messageHandlers.openWindow.postMessage(message);
			}
			return this.changeLocation(url);
		}
		return window.open(url);
      
	}
