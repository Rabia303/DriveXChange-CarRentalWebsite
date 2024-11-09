(() => {
	'use strict'

	/******************** Copy Clipboard Start ********************/
	const copyButtons = document.querySelectorAll('.input-group-text');
	if (copyButtons.length > 0) {
		copyButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				const input = event.currentTarget.previousElementSibling;
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
		});
	}
	/******************** Copy Clipboard End ********************/
})()