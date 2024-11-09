(() => {
	'use strict'

	/******************** Task Checkbox Start ********************/
	const checkboxes = document.getElementsByClassName('task-checkbox');
	if (checkboxes.length > 0) {
		document.addEventListener("DOMContentLoaded", () => {
			const checkboxes = document.querySelectorAll('.task-checkbox');
			checkboxes.forEach((checkbox) => {
				checkbox.addEventListener("change", (event) => {
					const checked = event.target.checked;
					const parent = event.target.closest(".border-dashed");
					const span = parent.querySelector("span");
					const small = parent.querySelector("small");
					if (checked) {
						span.classList.remove("text-heading");
						span.classList.add("text-body");
						small.classList.remove("text-heading");
						small.classList.add("text-body");
					} else {
						span.classList.remove("text-body");
						span.classList.add("text-heading");
						small.classList.remove("text-body");
						small.classList.add("text-heading");
					}
				});
				checkbox.dispatchEvent(new Event("change"));
			});
		});
	}
	/******************** Task Checkbox End ********************/


	/******************** User List Search Start ********************/
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
	/******************** User List Search End ********************/
})()