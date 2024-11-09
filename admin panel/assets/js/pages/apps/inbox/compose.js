(() => {
	'use strict'

	/******************** WYSIWYG Quill Editor (Mail Editor) Start ********************/
	const editor1 = document.querySelector("#mail-editor");
	if(editor1) {
		var quill = new Quill('#mail-editor', {
			placeholder: 'Type your text...',
			theme: 'snow',
		});
	}
	/******************** WYSIWYG Quill Editor (Mail Editor) End ********************/
})()