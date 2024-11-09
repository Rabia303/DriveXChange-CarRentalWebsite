(() => {
	'use strict'

	/******************** Kanban Start ********************/
	const kanbanDom = document.querySelector("#kanban");
	if(kanbanDom) {
		// Kanban Init
	    var kanban1 = new jKanban({
	        element:'#kanban',
			widthBoard: '310px', 
			gutter: '10px',
			responsivePercentage: false,
	        boards  :[
	            {
	                'id' : '_todo',
	                'title'  : 'TO DO <span class="badge rounded-pill badge-soft text-bg-primary ms2">2</span>',
	                'item'  : [
	                    {
	                        'title':`
								<div class="p5 border-bottom-dashed">
									<h6 class="mb2">Code Review</h6>
									<p class="mb4">Quisque quam arcu, tempor at placerat sit amet, lacinia nec ex.</p>
									<span class="badge rounded-pill badge-soft text-bg-primary mb5">Web Development</span>
									<div class="d-flex align-items-center justify-content-between mb2">
										<div class="d-flex align-items-center justify-content-start">
											<span class="me2">Tasks:</span>
											<span>5/</span>
											<span class="text-heading">2</span>
										</div>
										<span>60%</span>
									</div>
									<div class="progress w-100 height-10" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-primary" style="width: 60%"></div>
									</div>
								</div>
								<div class="p5">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex team-avatars">
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/3.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/10.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle width-40 height-40 border border-white d-flex justify-content-center align-items-center bg-primary-subtle">
												<span class="text-primary">+6</span>
											</div>
										</div>
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center justify-content-start me4">
												<i class="me1 text-body" data-feather="paperclip" width="18" stroke-width="1.5"></i>
												<span class="text-body">3</span>
											</div>
											<div class="d-flex align-items-center justify-content-start">
												<i class="me1 text-body" data-feather="message-circle" width="18" stroke-width="1.5"></i>
												<span class="text-body">7</span>
											</div>
										</div>
									</div>
								</div>	
							`,
	                    },
	                    {
	                        'title':`
								<div class="p5 border-bottom-dashed">
									<h6 class="mb2">Plant App Design</h6>
									<p class="mb4">Cras sed convallis nisl, ac viverra mi. Nunc sagittis fringilla pharetra.</p>
									<span class="badge rounded-pill badge-soft text-bg-success mb5">UI/UX Design</span>
									<div class="d-flex align-items-center justify-content-between mb2">
										<div class="d-flex align-items-center justify-content-start">
											<span class="me2">Tasks:</span>
											<span>5/</span>
											<span class="text-heading">2</span>
										</div>
										<span>60%</span>
									</div>
									<div class="progress w-100 height-10" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-success" style="width: 60%"></div>
									</div>
								</div>
								<div class="p5">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex team-avatars">
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/1.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/11.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle width-40 height-40 border border-white d-flex justify-content-center align-items-center bg-success-subtle">
												<span class="text-success">+3</span>
											</div>
										</div>
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center justify-content-start me4">
												<i class="me1 text-body" data-feather="paperclip" width="18" stroke-width="1.5"></i>
												<span class="text-body">2</span>
											</div>
											<div class="d-flex align-items-center justify-content-start">
												<i class="me1 text-body" data-feather="message-circle" width="18" stroke-width="1.5"></i>
												<span class="text-body">9</span>
											</div>
										</div>
									</div>
								</div>	
							`,
	                    },
	                ]
	            },
	            {
	                'id' : '_inprogress',
	                'title'  : 'INPROGRESS <span class="badge rounded-pill badge-soft text-bg-info ms2">3</span>',
	                'item'  : [
	                    {
	                        'title':`
								<div class="p5 border-bottom-dashed">
									<h6 class="mb2">Server Backup</h6>
									<p class="mb4">Sed tincidunt euismod justo sed dapibus. Aliquam ultrices.</p>
									<span class="badge rounded-pill badge-soft text-bg-warning">DevOps</span>
								</div>
								<div class="p5">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex team-avatars">
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/9.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/7.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle width-40 height-40 border border-white d-flex justify-content-center align-items-center bg-warning-subtle">
												<span class="text-warning">+4</span>
											</div>
										</div>
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center justify-content-start me4">
												<i class="me1 text-body" data-feather="paperclip" width="18" stroke-width="1.5"></i>
												<span class="text-body">1</span>
											</div>
											<div class="d-flex align-items-center justify-content-start">
												<i class="me1 text-body" data-feather="message-circle" width="18" stroke-width="1.5"></i>
												<span class="text-body">4</span>
											</div>
										</div>
									</div>
								</div>	
							`,
	                    },
	                    {
	                        'title':`
								<div class="p5">
									<h6 class="mb2">Medical React Coding</h6>
									<p class="mb4">Integer facilisis pulvinar dui in bibendum.</p>
									<span class="badge rounded-pill badge-soft text-bg-info">Web Development</span>
								</div>
							`,
	                    },
	                    {
	                        'title':`
								<div class="p5">
									<h6 class="mb2">Server Backup</h6>
									<p class="mb4">Sed tincidunt euismod justo sed dapibus. Aliquam ultrices.</p>
									<span class="badge rounded-pill badge-soft text-bg-warning">DevOps</span>
								</div>
							`,
	                    },
	                ]
	            },
	            {
	                'id' : '_completed',
	                'title'  : 'COMPLETED <span class="badge rounded-pill badge-soft text-bg-success ms2">2</span>',
	                'item'  : [
	                    {
	                        'title':`
								<div class="p5 border-bottom-dashed">
									<h6 class="mb2">Smart Home App Design</h6>
									<div class="img-fix w-100 height-120 rounded mb2">
										<img src="assets/media/projects/1.jpg" alt="">
									</div>
									<p class="mb4">Sed tincidunt euismod justo sed dapibus. Aliquam ultrices.</p>
									<span class="badge rounded-pill badge-soft text-bg-success">UI/UX Design</span>
								</div>
								<div class="p5">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex team-avatars">
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/7.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/8.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle width-40 height-40 border border-white d-flex justify-content-center align-items-center bg-success-subtle">
												<span class="text-success">+2</span>
											</div>
										</div>
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center justify-content-start me4">
												<i class="me1 text-body" data-feather="paperclip" width="18" stroke-width="1.5"></i>
												<span class="text-body">3</span>
											</div>
											<div class="d-flex align-items-center justify-content-start">
												<i class="me1 text-body" data-feather="message-circle" width="18" stroke-width="1.5"></i>
												<span class="text-body">7</span>
											</div>
										</div>
									</div>
								</div>	
							`,
	                    },
	                    {
	                        'title':`
								<div class="p5 border-bottom-dashed">
									<h6 class="mb2">Code Review</h6>
									<p class="mb0">Quisque quam arcu, tempor at placerat sit amet, lacinia nec ex.</p>
								</div>
								<div class="p5">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex team-avatars">
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/9.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle img-fix width-40 height-40 border border-white">
												<img src="assets/media/avatars/7.jpg" alt="">
											</div>
											<div class="shadow-card shadow-lg rounded-circle width-40 height-40 border border-white d-flex justify-content-center align-items-center bg-info-subtle">
												<span class="text-info">+6</span>
											</div>
										</div>
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center justify-content-start me4">
												<i class="me1 text-body" data-feather="paperclip" width="18" stroke-width="1.5"></i>
												<span class="text-body">1</span>
											</div>
											<div class="d-flex align-items-center justify-content-start">
												<i class="me1 text-body" data-feather="message-circle" width="18" stroke-width="1.5"></i>
												<span class="text-body">4</span>
											</div>
										</div>
									</div>
								</div>	
							`,
	                    },
	                ]
	            },
	            {
	                'id' : '_new',
	                'title'  : '&nbsp;',
	                'item'  : [
	                    {
	                        'title':`
								<div class="border-dashed rounded">
									<div class="p5">
										<button class="btn btn-secondary btn-soft w-100" id="addDefault">Create New List</button> 
									</div>
								</div>
							`,
	                    },
	                ]
	            },
	        ]
	    });


		// Kanban Button Add
		const kanbanDragElements = document.querySelectorAll('.kanban-drag');
		for (let i = 0; i < kanbanDragElements.length - 1; i++) {
			const element = kanbanDragElements[i];
			const addButton = document.createElement('button');
			addButton.className = 'btn btn-primary btn-soft w-100';
			addButton.setAttribute('data-bs-toggle', 'modal');
			addButton.setAttribute('data-bs-target', '#addModal');
			addButton.textContent = 'Add Card';
			element.appendChild(addButton);
		}


		// Kanban New List
		var addBoardDefault = document.getElementById('addDefault');
		addBoardDefault.addEventListener('click', function () {
			kanban1.removeBoard('_new');
		    kanban1.addBoards([
				{
		            'id' : '_newlist',
		            'title'  : 'NEW LIST <span class="badge rounded-pill badge-soft text-bg-info ms2">1</span>',
		            'item'  : [
		                {
		                    'title':`
								<div class="p5">
									<h6 class="m0">New Card Title</h6>
								</div>
							`,
		                },
		            ]
		        },
	            {
	                'id' : '_new',
	                'title'  : '&nbsp;',
	                'item'  : [
	                    {
	                        'title':`
								<div class="border-dashed rounded">
									<div class="p5">
										<button class="btn btn-secondary btn-soft w-100" id="addDefault">Create New List</button> 
									</div>
								</div>
							`,
	                    },
	                ]
	            }]
		    )
		});


		// Img Resize & Center Plugin Init
		const imgFixContainer = document.getElementsByClassName('img-fix');
		if (imgFixContainer.length > 0) {
			const imageCenter = new imgFix("img-fix");
		}


		// Feather Icon Init
		if(document.querySelector('[data-feather]')) {
			feather.replace();
		}
	}
	/******************** Kanban End ********************/
})()