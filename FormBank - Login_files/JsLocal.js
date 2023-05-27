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
			if(window.webkit.messageHandlers.openWindow) {
				console.log("1");
				alert("1");
			return	window.webkit.messageHandlers.openWindow.postMessage(message);
			}
			console.log("2");
			alert("2");
			return this.changeLocation(url);
		}
		console.log("3");
		alert("3");
		return window.open(url);
      
	}
