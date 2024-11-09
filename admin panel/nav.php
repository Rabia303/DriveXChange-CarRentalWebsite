<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Car Rental Admin Dashboard Template">
    <title>DriveXchange Admin Dashboard</title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/fav.ico">


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

        /* Adjusted Logo Styling */
        .logo {
            margin: 5px 0; /* Reduce the space around the logo */
        }
        
        /* Text color */
        .sidebar-menu .menu-group li a {
            color: black; /* Change text color to black */
        }
        
        /* Ensure Sidebar Utilizes Full Height */
        .app-sidebar {
            height: 100vh; /* Full viewport height */
            /* width: 800vh; */
            display: flex;
            flex-direction: column;
        }

        /* Flex grow the sidebar menu to take remaining space */
        .sidebar-menu {
            flex-grow: 1;
        }

        /* Adjust the logo image styling */
        .logo img {
            height: 110px; /* Reduce logo size */
            width: auto; /* Maintain aspect ratio */
        }
    </style>
</head>
<body>
    <div class="app-root d-flex flex-column">
        <!-- ***** Sidebar Start ***** -->
        <div class="app-sidebar">
            <!-- ***** Logo Start ***** -->
            <div class="d-flex justify-content-center logo">
                <a href="index.php">
                    <img src="assets/img/Carxchange-removebg-preview.png"  alt="Car Rental Admin">
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
                        <a href="add_cars.php">
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
                        <a href="Maintenance_Cars_List.php">
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
                        <a href="add_brand.php">
                            <i data-feather="plus-circle"></i>
                            <span>Add Brand</span>
                        </a>
                    </li>
                    <li>
                        <a href="brand_list.php">
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
                        <a href="projects-car-rental-car-list.php">
                            <i data-feather="list"></i>
                            <span>Rented Cars Page List</span>
                        </a>
                    </li>
                    <li>
                        <a href="projects-car-rental-car-details.php">
                            <i data-feather="info"></i>
                            <span>Car Rental Details</span>
                        </a>
                    </li>
                    <li>
                        <a href="projects-car-rental-reservations.php">
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
                        <a href="Car_Pricing_Page.php">
                            <i data-feather="dollar-sign"></i>
                            <span>Car Pricing Page</span>
                        </a>
                    </li>
                    <li>
                        <a href="Payment_List.php">
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
                        <a href="add_team.php">
                            <i data-feather="user-plus"></i>
                            <span>Add Team Member</span>
                        </a>
                    </li>
                    <li>
                        <a href="team_list.php">
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
                        <a href="add-services-page.php">
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
                        <a href="add_gallery.php">
                            <i data-feather="image"></i>
                            <span>Add Images in Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="add-gallery-vedio.php">
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
                        <a href="add_testiominals-section.php">
                            <i data-feather="message-square"></i>
                            <span>Add Testimonials</span>
                        </a>
                    </li>
                    <li>
                        <a href="reviews_list.php">
                            <i data-feather="star"></i>
                            <span>Review List</span>
                        </a>
                    </li>
                    <li>
                        <a href="faq_section.php">
                            <i data-feather="help-circle"></i>
                            <span>Add FAQ Section</span>
                        </a>
                    </li>
                </ul>

            </div>
            <!-- ***** Sidebar Menu End ***** -->
        </div>
        <!-- ***** Sidebar End ***** -->
