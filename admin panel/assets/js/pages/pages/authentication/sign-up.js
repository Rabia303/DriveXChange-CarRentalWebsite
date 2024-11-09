(() => {
	'use strict'

	/******************** Password Meter Start ********************/
	const passwordInput = document.getElementById("password");
	const meterItems = document.querySelectorAll("#meter .meter-item");
	if(passwordInput) {
		passwordInput.addEventListener("input", function() {
			const password = this.value;
			const strength = calculatePasswordStrength(password);

			updateMeterItems(strength);
		});

		function calculatePasswordStrength(password) {
			let strength = 0;

			// Check password length
			if (password.length >= 6) {
				strength += 1;
			}

			// Check for uppercase letters
			if (/[A-Z]/.test(password)) {
				strength += 1;
			}

			// Check for lowercase letters
			if (/[a-z]/.test(password)) {
				strength += 1;
			}

			// Check for numbers
			if (/[0-9]/.test(password)) {
				strength += 1;
			}

			// Check for special characters
			if (/[!@#$%^&*]/.test(password)) {
				strength += 1;
			}

			return strength;
		}

		function updateMeterItems(strength) {
			meterItems.forEach((item, index) => {
				if (index < strength) {
					item.classList.add("bg-success");
					item.classList.remove("bg-body-secondary");
				} else {
					item.classList.remove("bg-success");
					item.classList.add("bg-body-secondary");
				}
			});
		}
	}
	/******************** Password Meter End ********************/
})()