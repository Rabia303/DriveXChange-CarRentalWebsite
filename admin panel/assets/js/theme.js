(() => {
	'use strict'

	const htmlElement = document.querySelector('html');

	function getQueryParam(param) {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get(param);
	}


	/******************** Dark - Light Mode Set Start ********************/
	const modeValue = getQueryParam("mode");

	if (modeValue == 'dark') {
		localStorage.setItem('theme', 'dark');
	} else if (modeValue == 'light'){
		localStorage.setItem('theme', 'light');
	}

	if (!localStorage.getItem('theme')) {
		const defaultTheme = htmlElement.getAttribute('data-bs-theme');
		localStorage.setItem('theme', defaultTheme);
	}	

	const theme = localStorage.getItem('theme');
	htmlElement.setAttribute('data-bs-theme', theme);
	/******************** Dark - Light Mode Set End ********************/
	


	/******************** Theme Direction Set Start ********************/
	const dirValue = getQueryParam("dir");

	if (dirValue == 'rtl') {
		localStorage.setItem('dir', 'rtl');
	} else if (dirValue == 'ltr'){
		localStorage.setItem('dir', 'ltr');
	}

	if (!localStorage.getItem('dir')) {
		const defaultDir = htmlElement.getAttribute('dir');
		localStorage.setItem('dir', defaultDir);
	}	

	const dir = localStorage.getItem('dir');
	htmlElement.setAttribute('dir', dir);
	/******************** Theme Direction Set End ********************/
})()