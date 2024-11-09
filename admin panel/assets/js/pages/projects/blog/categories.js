(() => {
	'use strict'

	/******************** Slug URL Start ********************/
	const urlSlug = document.getElementsByClassName('slug-target');
	if (urlSlug.length > 0) {
		const titleInput = document.querySelector(".slug-target");
		const slugInput = document.querySelector(".slug-url");

		titleInput.addEventListener("input", () => {
			const slug = slugify(titleInput.value);
			slugInput.value = slug;
		});

		function slugify(text) {
			return text
			.toString()
			.toLowerCase()
			.normalize('NFD')  					// parse latin letters
			.replace(/[\u0300-\u036f]/g, '') 	// delete parsed characters
			.replace(/\s+/g, "-")        		// converts spaces to hyphens
			.replace(/[^\w\-]+/g, "-")   		// converts special characters to hyphens
			.replace(/\-\-+/g, "-")      		// converts consecutive hyphens to single hyphen
			.replace(/^-+/, "")          		// removes leading hyphens
			.replace(/-+$/, "");         		// removes trailing hyphens
		}
	}
	/******************** Slug URL End ********************/
})()