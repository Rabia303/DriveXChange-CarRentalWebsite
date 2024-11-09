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

                    <!-- ***** Content Start ***** -->
                    <div class="app-content p6 pb2 smp1">
                        <div class="container p0">
                            <!-- Page Top Start -->
                            <div class="row mb6 align-items-center">
                                <div class="col-md-6 mobile-bottom-fix">
                                    <h1 class="page-title mb2">Team List</h1>
                                    <nav class="breadcrumb-nav" aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Team List
                                            </li>
                                        </ol>
                                    </nav>
                                </div>

                            </div>
                            <!-- Page Top End -->


                            <!-- Content Start -->
                            <div class="row mb5">
                                <div class="col-12">
                                    <div class="card shadow-card p6 pt3">
                                        <div class="table-responsive text-nowrap">
                                            <table class="table qd-table mb6 align-middle">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col" class="text-end">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="d-inline-flex flex-row align-items-center">
                                                                <div class="width-120 height-80 img-fix rounded me4">
                                                                    <img src="assets/media/cars/1.jpg" alt="">
                                                                </div>
                                                                <strong>Volkswagen</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <strong class="text-heading">Golf TSI 2017</strong>
                                                        </td>

                                                        <td>
                                                            <div class="dropdown text-end">
                                                                <button type="button" class="outline-none dropdown-toggle arrow-none border-0 height-40 rounded ps3 bg-body-secondary opacity-75" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span class="text-heading">Actions</span>
                                                                    <i data-feather="chevron-down" stroke-width="2" height="16" class="text-heading"></i>
                                                                </button>
                                                                <ul class="dropdown-menu text-start">
                                                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                                                    <li><a class="dropdown-item" href="#">Details</a>
                                                                    </li>
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

                    <?php
            include('footer.php');
            ?>