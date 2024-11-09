(() => {
	'use strict'

	/******************** WYSIWYG Quill Editor (Description) Start ********************/
	const editor1 = document.querySelector("#description-editor");
	if(editor1) {
		var quill = new Quill('#description-editor', {
			placeholder: 'Type your description...',
			theme: 'snow',
		});
	}
	/******************** WYSIWYG Quill Editor (Description) End ********************/
	

	/******************** WYSIWYG Quill Editor (Answer) Start ********************/
	const editor2 = document.querySelector("#answer-editor");
	if(editor2) {
		var quill = new Quill('#answer-editor', {
			placeholder: 'Type your description...',
			theme: 'snow',
		});
	}
	/******************** WYSIWYG Quill Editor (Answer) End ********************/
})()