(() => {
	'use strict'

	// Contact List Search
	const input = document.getElementById("contact-search");
	if(input) {
		input.addEventListener("keyup", function () {
			const filter = input.value.toUpperCase();
			const cards = document.getElementsByClassName("card")[0].children;

			for (let i = 1; i < cards.length; i++) {
				const cardText = cards[i]
				.getElementsByClassName("text-heading")[0]
				.textContent.toUpperCase();
				if (cardText.includes(filter)) {
					cards[i].style.setProperty("display", "flex", "important");
				} else {
					cards[i].style.setProperty("display", "none", "important");
				}
			}
		});
	}


	// Group List Search
	const groupInput = document.getElementById("group-search");
	if(groupInput) {
		groupInput.addEventListener("keyup", function () {
			const filter = groupInput.value.toUpperCase();
			const cards = document.getElementsByClassName("group-contact")[0].children;
			console.log(groupInput.value.toUpperCase());

			for (let i = 1; i < cards.length; i++) {
				const cardText = cards[i]
				.getElementsByClassName("text-heading")[0]
				.textContent.toUpperCase();
				if (cardText.includes(filter)) {
					cards[i].style.setProperty("display", "flex", "important");
				} else {
					cards[i].style.setProperty("display", "none", "important");
				}
			}
		});
	}


	// Chat App Custom Scroll
	if (document.querySelectorAll('.chat-app-scroll').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".chat-app-scroll"));
	}
})()