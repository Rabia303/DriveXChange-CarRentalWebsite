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
})()