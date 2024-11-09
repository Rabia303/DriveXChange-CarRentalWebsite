(() => {
	'use strict'

	// Feather Icon Init
	if(document.querySelector('[data-feather]')) {
		feather.replace();
	}


	// Sidebar Dropdown Menu
	if (document.querySelectorAll('.sidebar-menu .menu-group li.sub-menu').length > 0) {
		const listItems = document.querySelectorAll(".sidebar-menu .menu-group li.sub-menu");
		listItems.forEach(item => {
			item.addEventListener("click", function(event) {
				const clickedElement = event.target.closest(".sub-menu");

				const elements = document.querySelectorAll(".sidebar-menu .menu-group li.sub-menu");
				elements.forEach(element => {
					if(element !== clickedElement) {
						element.classList.remove("active");
						element.style.maxHeight = "40px";
					}
				});

				const subMenuElement = event.target.closest(".sidebar-menu .sub-menu-group");
				if (subMenuElement) {
					return false;
				}

				this.classList.toggle("active");
				if(this.clientHeight === 40) {
					this.style.maxHeight = this.scrollHeight + "px";
				}else{
					this.style.maxHeight = "40px";
				}
			});
		});
	}


	// Sidebar Height Settings Function
	const sidebarDom = document.getElementsByClassName('sidebar-menu');
	if (sidebarDom.length > 0) {
		function sidebarSet() {
			const bodyHeight = window.innerHeight;
			const logoHeight = document.querySelector(".sidebar-logo").clientHeight;
			const footerHeight = document.querySelector(".sidebar-footer").clientHeight;
			const sidebar = document.querySelector(".sidebar-menu").style.height = (bodyHeight - (logoHeight + footerHeight)) + "px";
		}
		sidebarSet();

		window.addEventListener("resize", function() {
			sidebarSet();
		});
	}


	// Custom Scrollbar Init
	if (document.querySelectorAll('.custom-scroll').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".custom-scroll"));

		const activeMenu = document.querySelector(".custom-scroll .ss-content .sub-menu.active, .custom-scroll .ss-content .single-menu.active");
		if (activeMenu) {
			const offsetTop = activeMenu.offsetTop;
			const scrollContainer = document.querySelector(".custom-scroll .ss-content");
			scrollContainer.scroll({
				top: offsetTop,
				behavior: "smooth"
			});
		}
	}


	// Chat Scrollbar Init
	if (document.querySelectorAll('.chat-scroll').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".chat-scroll"));
	}


	// Search Scrollbar Init
	if (document.querySelectorAll('.search-scroll').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".search-scroll"));
	}


	// Horizontal Menu Scrollbar Init
	if (document.querySelectorAll('.horizontal-menu').length > 0) {
		SimpleScrollbar.initEl(document.querySelector(".horizontal-menu"));

		window.addEventListener("load", function() {
			const menu = document.querySelector(".horizontal-menu .ss-wrapper .ss-content");
			const activeMenuItem = document.querySelector(".horizontal-menu .ss-wrapper .ss-content .active");

			if (menu && activeMenuItem) {
				menu.scrollLeft = activeMenuItem.offsetLeft;
			}
		});
	}


	// Sidebar Responsive Menu Button
	if (document.querySelectorAll('.sidebar-menu-trigger').length > 0) {
		const appSidebar = document.querySelector('.app-sidebar');
		const menuBackdrop = document.querySelector('.menu-backdrop');
		document.querySelectorAll('.sidebar-menu-trigger')[0].addEventListener('click', function() {
			appSidebar.classList.add('open');
			menuBackdrop.classList.add('active');
		});
		document.querySelectorAll('.menu-backdrop')[0].addEventListener('click', function() {
			appSidebar.classList.remove('open');
			menuBackdrop.classList.remove('active');
		});
	}


	// Header Responsive Menu
	if (document.querySelectorAll('.header-menu-trigger').length > 0) {
		const mobileMenuItems = document.querySelectorAll(".top-nav .menu-group li.sub-menu");
		mobileMenuItems.forEach(item => {
			item.addEventListener("click", function(event) {
				const clickedElement = event.target.closest(".sub-menu");
				const elements = document.querySelectorAll(".top-nav .menu-group li.sub-menu");
				elements.forEach(element => {
					if(element !== clickedElement) {
						element.classList.remove("open");
					}
				});

				const subMenuElement = event.target.closest(".top-nav .menu-group li.top-sub-menu");
				if (subMenuElement) {
					return false;
				}

				this.classList.toggle("open");
			});
		});
		// Header Responsive Sub Menu
		const mobileSubMenuItems = document.querySelectorAll(".top-nav .top-menu-group li.top-sub-menu");
		mobileSubMenuItems.forEach(item => {
			item.addEventListener("click", function(event) {
				const clickedElement = event.target.closest(".top-sub-menu");
				const elements = document.querySelectorAll(".top-nav .top-menu-group li.top-sub-menu");

				console.log(elements);
				elements.forEach(element => {
					if(element !== clickedElement) {
						element.classList.remove("open");
					}
				});

				this.classList.toggle("open");
			});
		});
		// Header Responsive Menu Button
		if (document.querySelectorAll('.header-menu-trigger').length > 0) {
			document.querySelectorAll('.header-menu-trigger')[0].addEventListener('click', function() {
				this.classList.toggle('active');
				document.querySelector('.top-nav .menu-group').classList.toggle('sliding');
			});
		}
	}


	// Tooltips Init
	if(document.querySelector('[data-bs-toggle="tooltip"]')) {
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	}


	// Popover Init
	if(document.querySelector('[data-bs-toggle="popover"]')) {
		const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
		const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
	}


	// Offcanvas Chat & Sidebar Scrollbar RTL fix
	document.addEventListener('DOMContentLoaded', function() {
		const htmlEl = document.querySelector('html');
		const offcanvasEl = document.querySelector('.offcanvas-chat');
		const sidebarEl = document.querySelector('.sidebar-menu');

		if (htmlEl.getAttribute('dir') === 'rtl') {
			offcanvasEl.classList.remove('offcanvas-end');
			offcanvasEl.classList.add('offcanvas-start');
			sidebarEl.classList.add('direction-rtl-class');
		}

		const themeChangeDarkEl = document.querySelector('.theme-change-dark');
		const themeChangeLightEl = document.querySelector('.theme-change-light');

		function setDark() {
			// If there is no check icon for dark theme add it
			if (!themeChangeDarkEl.querySelector('svg')) {
				const checkIcon = document.createElement('i');
				checkIcon.classList.add('text-success');
				checkIcon.setAttribute('data-feather', 'check');
				checkIcon.setAttribute('stroke-width', '1.5');
				checkIcon.setAttribute('height', '22');
				themeChangeDarkEl.appendChild(checkIcon);
				feather.replace();
			}

			// Remove check icon for light theme
			if (themeChangeLightEl) {
				const checkIcon = themeChangeLightEl.querySelector('svg');
				if (checkIcon) {
					checkIcon.remove();
				}
			}
			document.getElementById('current-theme').textContent = 'Dark';
		}

		function setLight() {
			// If there is no check icon for light theme add it
			if (!themeChangeLightEl.querySelector('svg')) {
				const checkIcon = document.createElement('i');
				checkIcon.classList.add('text-success');
				checkIcon.setAttribute('data-feather', 'check');
				checkIcon.setAttribute('stroke-width', '1.5');
				checkIcon.setAttribute('height', '22');
				themeChangeLightEl.appendChild(checkIcon);
				feather.replace();
			}

			// Remove check icon for dark theme
			if (themeChangeDarkEl) {
				const checkIcon = themeChangeDarkEl.querySelector('svg');
				if (checkIcon) {
					checkIcon.remove();
				}
			}
			document.getElementById('current-theme').textContent = 'Light';
		}

		const theme = localStorage.getItem('theme');
		if(theme == 'dark') {
			setDark();
		}else{
			setLight();
		}

		if (themeChangeDarkEl) {
			themeChangeDarkEl.addEventListener('click', function() {
				htmlEl.setAttribute('data-bs-theme', 'dark');
				localStorage.setItem('theme', 'dark');

				setDark();
			});
		}
		
		if (themeChangeLightEl) {
			themeChangeLightEl.addEventListener('click', function() {
				htmlEl.setAttribute('data-bs-theme', 'light');
				localStorage.setItem('theme', 'light');

				setLight();
			});
		}
	});


	// Footer Position Fix
	const footerDom = document.querySelector('footer');
	if (footerDom) {
		function fixFooter() {
			var appMain = document.querySelector('.app-main');
			var footer = document.querySelector('footer');
			var windowHeight = window.innerHeight;
			var appMainHeight = appMain.offsetHeight;
			var footerHeight = footer.offsetHeight;

			if (appMainHeight + footerHeight < windowHeight) {
				footer.classList.add('fix-footer');
			} else {
				footer.classList.remove('fix-footer');
			}
		}
		window.addEventListener('resize', fixFooter);
		window.addEventListener('load', fixFooter);
	}


	// Img Resize & Center Plugin Init
	const imgFixContainer = document.getElementsByClassName('img-fix');
	if (imgFixContainer.length > 0) {
		const imageCenter = new imgFix("img-fix");
	}


	// Width set (data-qd-width="68%")
	if(document.querySelector('[data-qd-width]')) {
		const elements = document.querySelectorAll("[data-qd-width]");
		elements.forEach(function (element) {
			const width = element.getAttribute("data-qd-width");
			element.style.width = width + "%";
		});
	}


	// Selectbox Init
	const selectboxes = document.querySelectorAll('.js-choice');
	if (selectboxes.length > 0) {
		selectboxes.forEach(function(selectbox) {
			const choices = new Choices(selectbox, {
				searchPlaceholderValue: 'Search...',
			});
		});
	}


	// Drop Image Upload
	const dropArea = document.getElementById('drop-area');
	if (dropArea) {
		const input = document.getElementById('fileElem');
		const previewImg = document.getElementById('preview-img');

		input.addEventListener('change', function() {
			if (this.files.length > 0) {
				const file = this.files[0];
				const reader = new FileReader();

				reader.addEventListener('load', function() {
					previewImg.src = reader.result;
				});

				reader.readAsDataURL(file);
			}
		});		

		// Prevent default drag behaviors
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, preventDefaults, false);
			document.body.addEventListener(eventName, preventDefaults, false);
		});

		// Highlight drop area when item is dragged over it
		['dragenter', 'dragover'].forEach(eventName => {
			dropArea.addEventListener(eventName, highlight, false);
		});

		['dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, unhighlight, false);
		});

		// Handle dropped files
		dropArea.addEventListener('drop', handleDrop, false);

		// Handle file selection through button
		const fileSelect = document.getElementById('fileSelect');
		const fileElem = document.getElementById('fileElem');
		fileSelect.addEventListener('click', function(e) {
		e.preventDefault();
			fileElem.click();
		});

		fileElem.addEventListener('change', handleFiles, false);

		function preventDefaults(e) {
			e.preventDefault();
			e.stopPropagation();
		}

		function highlight() {
			dropArea.classList.add('highlight');
		}

		function unhighlight() {
			dropArea.classList.remove('highlight');
		}

		function handleDrop(e) {
			const dt = e.dataTransfer;
			const files = dt.files;

			handleFiles(files);
		}

		function handleFiles(files) {
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onloadend = function() {
					previewImg.src = reader.result;
					previewImg.style.display = 'block';
				};
			}
		}
	}


	// Datepicker Range Init
	const datePickerInput = document.querySelectorAll('.qd-datepicker');
	if (datePickerInput.length > 0) {
		document.querySelectorAll('.qd-datepicker').forEach(function(datepicker) {
			new tempusDominus.TempusDominus(datepicker, {
				allowInputToggle: true,
				dateRange: true,
				display: {
					icons: {
						type: 'icons',
						time: 'fa fa-clock-o',
						date: 'fa fa-calendar',
						up: 'fa fa-arrow-up',
						down: 'fa fa-arrow-down',
						previous: 'fa fa-chevron-left',
						next: 'fa fa-chevron-right',
						today: 'fa fa-calendar-check-o',
						clear: 'fa fa-trash',
						close: 'fa fa-times'
					},
					components: {
						clock: false
					},
					keepOpen: true,
				},
				localization: {
					format: 'yyyy-MM-dd',
				}
			});
		});
	}


	// Datepicker Init
	const datePickerSingleInput = document.querySelectorAll('.qd-datepicker-single');
	if (datePickerSingleInput.length > 0) {
		document.querySelectorAll('.qd-datepicker-single').forEach(function(datepicker) {
			new tempusDominus.TempusDominus(datepicker, {
				allowInputToggle: true,
				dateRange: false,
				display: {
					icons: {
						type: 'icons',
						time: 'fa fa-clock-o',
						date: 'fa fa-calendar',
						up: 'fa fa-arrow-up',
						down: 'fa fa-arrow-down',
						previous: 'fa fa-chevron-left',
						next: 'fa fa-chevron-right',
						today: 'fa fa-calendar-check-o',
						clear: 'fa fa-trash',
						close: 'fa fa-times'
					},
					components: {
						clock: false
					},
					keepOpen: true,
				},
				localization: {
					format: 'yyyy-MM-dd',
				}
			});
		});
	}


	// Tagify Init
	const tagInputs = document.querySelectorAll('.tagify');
	if (tagInputs.length > 0) {
		tagInputs.forEach(function(tagInput) {
			new Tagify(tagInput)
		});
	}


	// highlight.js Init
	const code = document.querySelectorAll('pre code');
	if (code.length > 0) {
		document.addEventListener('DOMContentLoaded', (event) => {
			document.querySelectorAll('pre code').forEach((el) => {
				hljs.highlightElement(el);
			});
		});
	}


	//Form Validation Start
	const validateForm = document.getElementsByClassName('needs-validation');
	if (validateForm.length > 0) {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')
		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {				
					event.preventDefault();
					event.stopPropagation();
					const selectElements = document.querySelectorAll("select[required]");
					selectElements.forEach((select) => {
						if (select.value === "") {
							const invalidMessage = select.parentElement.parentElement.nextElementSibling;
							invalidMessage.style.display = "block";
						} else {
							const invalidMessage = select.parentElement.parentElement.nextElementSibling;
							invalidMessage.style.display = "none";
						}
					});
				}else{
				    Swal.fire({
				        text: "Congratulations, the form has been successfully submitted.",
				        icon: "success",
				        buttonsStyling: false,
				        confirmButtonText: "Ok, got it!",
				        customClass: {
				            confirmButton: "btn btn-primary"
				        }
				    });
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated')
			}, false)
		});

		const selectElements = document.querySelectorAll("select[required]");
		selectElements.forEach((select) => {
			select.addEventListener("change", (event) => {
				if (event.target.value === "") {
					const invalidMessage = event.target.parentElement.parentElement.nextElementSibling;
					invalidMessage.style.display = "block";
				} else {
					const invalidMessage = event.target.parentElement.parentElement.nextElementSibling;
					invalidMessage.style.display = "none";
				}
			});
		});
	}
})()