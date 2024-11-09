(() => {
	'use strict'

	/******************** Copy Link Start ********************/
	const copyBtn = document.getElementById("copy-link");
	const input = document.getElementById("link");
	if (copyBtn) {
		copyBtn.addEventListener('click', (event) => {
			navigator.clipboard.writeText(input.value).then(() => {
			    Swal.fire({
			        text: '"' + input.value + '" successfully copied.',
			        icon: "success",
			        buttonsStyling: false,
			        confirmButtonText: "Ok, got it!",
			        customClass: {
			            confirmButton: "btn btn-primary"
			        }
			    });
			}).catch((error) => {
				console.error('Error:', error);
			});
		});
	}
	/******************** Copy Link End ********************/
})()