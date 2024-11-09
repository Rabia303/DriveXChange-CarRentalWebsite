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
            <!-- ***** Header End ***** -->

            <!-- ***** Content Start ***** -->
            <div class="app-content p6 pb2 smp1">
                <div class="container p0">
                    <!-- Page Top Start -->

                    <!-- Page Top End -->
                    <h4>Vedio Gallery</h4>
                    <!-- Content Start -->
                    <form method="post">
                        <div class="row mb5">
                            <!-- Left Column Start -->
                            <div class="col-xxl-8">
                                <div class="row">
                                    <!-- General Start -->
                                    <div class="col-12 mb6">
                                        <div class="card shadow-card p6">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h6 class="mb4">Add Vedio </h6>
                                                </div>
                                                <div class="col-12 mb5">
                                                    <label for="add-form-6" class="form-label">
                                                        <span>Car Name</span>

                                                        <i data-feather="info" stroke-width="2" width="12"
                                                            class="text-body" data-bs-toggle="tooltip"
                                                            data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                            data-bs-title="Type a name of a Car."></i>
                                                    </label>
                                                    <input id="add-form-6" class="form-control slug-target" type="text">
                                                    <div class="invalid-feedback">Please fill out all fields.</div>
                                                </div>                                             
                                                <div class="col-12 mb-5">
                                                    <label for="carImage" class="form-label">
                                                        <span>Car Image</span>
                                                    </label>
                                                    <input id="carImage" class="form-control" type="file">
                                                </div>
                                                <div class="col-12 mb-5">
                                                    <label for="carVideo" class="form-label">
                                                        <span>Car Video</span>
                                                    </label>
                                                    <input id="carVideo" class="form-control" type="file" accept="video/*">
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Left Column End -->

                            <!-- Buttons Start -->
                            <div class="col-12 text-end">
                               
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                            <!-- Buttons End -->
                        </div>
                    </form>
                    <!-- Content End -->

                    <?php
            include('footer.php');
            ?>