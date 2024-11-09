<?php

include('nav.php');
?>

        <!-- ***** Responsive Menu Backdrop Start ***** -->
        <div class="menu-backdrop"></div>
        <!-- ***** Responsive Menu Backdrop End ***** -->

        <!-- ***** Main Start ***** -->
        <main class="app-main">
            <!-- ***** Header Start ***** -->
            <header class="main-header d-flex justify-content-between">
                <!-- ***** Sidebar Menu Open Button Start ***** -->
                <a href="javascript:;" class="sidebar-menu-trigger"><span>Menu</span></a>
                <!-- ***** Sidebar Menu Open Button End ***** -->
            </header>

			<!-- ***** Content Start ***** -->
			<div class="app-content p6 pb2 smp1">
				<div class="container p0">
					<!-- Page Top Start -->
					<div class="row mb6 align-items-center">
						<div class="col-md-6 mobile-bottom-fix">
							<h1 class="page-title mb2">Reservations</h1>
							<nav class="breadcrumb-nav" aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="#">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Reservations</li>
								</ol>
							</nav>
						</div>
					</div>
					<!-- Page Top End -->

					<!-- Mini Widgets Start -->
					<div class="row mb2">
						<!-- Widget 1 Start -->
						<div class="col-xxl-4 mb5">
							<div class="bg-primary rounded-3 pt2 pb5 text-center">
								<h6 class="text-white mb0">Total Reservations</h6>
							</div>
							<div class="card shadow-card p5 text-center mtn4">
								<h1 class="mb1">13,256</h1>
								<span>Total number of bookings to date.</span>
							</div>
						</div>
						<!-- Widget 1 End -->
						
						<!-- Widget 2 Start -->
						<div class="col-xxl-4 mb5">
							<div class="bg-info rounded-3 pt2 pb5 text-center">
								<h6 class="text-white mb0">New Reservations</h6>
							</div>
							<div class="card shadow-card p5 text-center mtn4">
								<h1 class="mb1">48</h1>
								<span>New incoming unchecked reservations.</span>
							</div>
						</div>
						<!-- Widget 2 End -->
						
						<!-- Widget 3 Start -->
						<div class="col-xxl-4 mb5">
							<div class="bg-success rounded-3 pt2 pb5 text-center">
								<h6 class="text-white mb0">Canceled Reservations</h6>
							</div>
							<div class="card shadow-card p5 text-center mtn4">
								<h1 class="mb1">27</h1>
								<span>Bookings canceled by users.</span>
							</div>
						</div>
						<!-- Widget 3 End -->
					</div>
					<!-- Mini Widgets End -->

					<!-- Content Start -->
					<div class="row mb5">
						<div class="col-12">
							<div class="card shadow-card p6 pt3">
								<div class="table-responsive text-nowrap">
									<table class="table qd-table mb6 align-middle">
										<thead>
											<tr>
												<th scope="col">Reservation ID</th>
												<th scope="col">User Name</th>
												<th scope="col">Car</th>
												<th scope="col">Start Date</th>
												<th scope="col">End Date</th>
												<th scope="col">Status</th>
												<th scope="col">Total Amount</th>
												<th scope="col" class="text-end">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<strong class="text-heading">#2179</strong>
												</td>
												<td>
													<strong>Volkswagen - Golf TSI 2017</strong>
												</td>
												<td>
													<strong>Lance Bogrol</strong>
												</td>
												<td>
													<strong class="d-block mb1">Apr 9, 2023</strong>
													<small class="d-block">1308 Midway Road</small>
												</td>
												<td>
													<strong class="d-block mb1">Apr 12, 2023</strong>
													<small class="d-block">3532 Ward Road</small>
												</td>
												<td>
													<span class="badge rounded-pill badge-soft text-bg-info">New</span>
												</td>
												<td>
													<strong>$92,20</strong>
												</td>
												<td>
													<div class="dropdown text-end">
														<button type="button" class="outline-none dropdown-toggle arrow-none border-0 height-40 rounded ps3 bg-body-secondary opacity-75" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
															<span class="text-heading">Actions</span>
															<i data-feather="chevron-down" stroke-width="2" height="16" class="text-heading"></i>
														</button>
														<ul class="dropdown-menu text-start">
															<li><a class="dropdown-item" href="#">Edit</a></li>
															<li><a class="dropdown-item" href="#">Details</a></li>
															<li>
																<a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
																	Delete <i data-feather="info" stroke-width="2" height="12" class="text-body me1" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="qd-tooltip" data-bs-title="If you delete it, this action cannot be undone."></i>
																</a>
															</li>
														</ul>
													</div>
												</td>
											</tr>
																															
										</tbody>
									</table>
								</div>							
							</div>
						</div>
					</div>
					<!-- Content End -->
				</div>
			</div>
			<!-- ***** Content End ***** -->

			<!-- ***** Footer Start ***** -->
			<!-- <footer class="p6 pt5 pb5">
				<div class="container-fluid p0">
					<div class="row">
						<div class="col-sm-6 text-center text-lg-start mb-sm-1">
							<span>2023©</span>
							<span class="text-heading">Qoduby</span>
						</div>
						<div class="col-sm-6">
							<ul class="list-inline m0 text-center text-lg-end">
								<li class="list-inline-item"><a href="#" class="text-body text-decoration-none hover-primary">Support</a></li>
								<li class="list-inline-item"><a href="#" class="text-body text-decoration-none hover-primary">License</a></li>
								<li class="list-inline-item"><a href="#" class="text-body text-decoration-none hover-primary">Documentation</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer> -->
			<!-- ***** End Start ***** -->
		</main>
		<!-- ***** Main End ***** -->
	</div>

	<!-- Plugin Bundle -->
	<script src="assets/js/plugins.bundle.js" crossorigin="anonymous"></script>
	<!-- Common Javascript -->
	<script src="assets/js/app.js" crossorigin="anonymous"></script>
</body>

<!-- Mirrored from qoduby.tempload.com/html/demo6/dist/projects-car-rental-reservations.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Jun 2024 23:01:45 GMT -->
</html>