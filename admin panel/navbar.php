<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Car Rental Admin Dashboard Template">
    <title>Car Rental Admin Dashboard</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/img/fav.ico">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Global CSS -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- Feather Icons -->
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    
	<style>
        /* Custom Scrollbar */
        .sidebar-menu.custom-scroll {
            overflow-y: auto;
            max-height: calc(100vh - 60px); /* Adjust as needed based on your layout */
        }
        
        /* Text color */
        .sidebar-menu .menu-group li a {
            color: black; /* Change text color to black */
        }
    </style>
</head>
<body>
    <div class="app-root d-flex flex-column">
        <!-- ***** Sidebar Start ***** -->
        <div class="app-sidebar">
            <!-- ***** Logo Start ***** -->
            <div class="sidebar-logo d-flex justify-content-center">
                <a href="index.html">
                    <img src="assets/img/Carxchange-removebg-preview.png" height="30" alt="Car Rental Admin">
                </a>
            </div>
            <!-- ***** Logo End ***** -->

            <!-- ***** Sidebar Menu Start ***** -->
            <div class="sidebar-menu custom-scroll">
                <!-- ***** Dashboard Menu ***** -->
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="home"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Cars Menu ***** -->
                <div class="menu-title">
                    Cars
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="plus-square"></i>
                            <span>Add Car</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="list"></i>
                            <span>Manage Cars</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="tool"></i>
                            <span>Maintenance Cars List</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Brands Menu ***** -->
                <div class="menu-title">
                    Brands
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="plus-circle"></i>
                            <span>Add Brand</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="list"></i>
                            <span>Brand List</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Rentals Menu ***** -->
                <div class="menu-title">
                    Rentals
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="list"></i>
                            <span>Car Rental Reservation List</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="list"></i>
                            <span>Rented Cars Page List</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="info"></i>
                            <span>Car Rental Details</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="info"></i>
                            <span>Reservation Details</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Pricing & Payments Menu ***** -->
                <div class="menu-title">
                    Pricing & Payments
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="dollar-sign"></i>
                            <span>Car Pricing Page</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="credit-card"></i>
                            <span>Payment List</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Team Menu ***** -->
                <div class="menu-title">
                    Team
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="user-plus"></i>
                            <span>Add Team Member</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="users"></i>
                            <span>Team List</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Services Menu ***** -->
                <div class="menu-title">
                    Services
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="plus"></i>
                            <span>Add Service</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="list"></i>
                            <span>Services List</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Gallery Menu ***** -->
                <div class="menu-title">
                    Gallery
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="image"></i>
                            <span>Add Images in Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="video"></i>
                            <span>Add Gallery Video</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Customer Interactions Menu ***** -->
                <div class="menu-title">
                    Customer Interactions
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="message-square"></i>
                            <span>Add Testimonials</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="star"></i>
                            <span>Review List</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="help-circle"></i>
                            <span>Add FAQ Section</span>
                        </a>
                    </li>
                </ul>

                ***** Support Menu *****
                <div class="menu-title">
                    Support
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="life-buoy"></i>
                            <span>Tickets</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Analytics & Reports Menu ***** -->
                <div class="menu-title">
                    Analytics & Reports
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="bar-chart-2"></i>
                            <span>Analytics & Reports</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Settings Menu ***** -->
                <div class="menu-title">
                    Settings
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="settings"></i>
                            <span>Integration Settings</span>
                        </a>
                    </li>
                </ul>

                <!-- ***** Notifications Menu ***** -->
                <div class="menu-title">
                    Notifications
                </div>
                <ul class="menu-group">
                    <li>
                        <a href="#">
                            <i data-feather="bell"></i>
                            <span>Notifications</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ***** Sidebar Menu End ***** -->
        </div>
        <!-- ***** Sidebar End ***** -->

     
