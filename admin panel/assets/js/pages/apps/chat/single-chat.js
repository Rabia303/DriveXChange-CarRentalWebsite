(() => {
	'use strict'

	/******************** Contact List Search Start ********************/
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
	/******************** Contact List Search End ********************/


	/******************** Chat App Custom Scroll Start ********************/
	if (document.querySelectorAll('.chat-app-scroll').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".chat-app-scroll"));
	}
	/******************** Chat App Custom Scroll End ********************/
})()