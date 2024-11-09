<?php
include('header.php')
?>
    <!-- Header Banner -->
    <section class="banner-header section-padding bg-img" data-overlay-dark="5" data-background="img/slider/3.jpg">
        <div class="v-middle">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h6>Categories</h6>
                        <h1>Rental <span>Car Types</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- divider line -->
    <div class="line-vr-section"></div>
    <!-- Car Types 2 -->
    <section class="car-types2 section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-coupe-car"></span>
                            <h6>Luxury Cars</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-coupe-car"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-sportive-car"></span>
                            <h6>Sport Cars</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-sportive-car"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-car-suv"></span>
                            <h6>SUVs</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-car-suv"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-cabrio-car"></span>
                            <h6>Convertible</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-cabrio-car"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-car-of-hatchback-model"></span>
                            <h6>Hatchback</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-car-of-hatchback-model"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-sedan-car-model"></span>
                            <h6>Sedan</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-sedan-car-model"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-minivan-car"></span>
                            <h6>Minivan</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-minivan-car"></span> </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item">
                        <a href="car-details.php"> <span class="flaticon-car"></span>
                            <h6>Small Cars</h6>
                        </a>
                        <div class="bg-icon"> <span class="flaticon-car"></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Booking Search -->
    <section class="background bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/slider/2.jpg">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center mb-15">
                    <div class="section-subtitle">Rent Now</div>
                    <div class="section-title">Book Auto Rental</div>
                </div>
            </div>
            <div class="booking-inner clearfix">
                <form action="#0" class="form1 brdr clearfix">
                    <div class="col2 c3">
                        <div class="select1_wrapper">
                            <label>Choose Car Type</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="0">Choose Car Type</option>
                                    <option value="1">All</option>
                                    <option value="2">Luxury Cars</option>
                                    <option value="3">Sport Cars</option>
                                    <option value="4">SUVs</option>
                                    <option value="5">Convertible</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col2 c4">
                        <div class="select1_wrapper">
                            <label>Pick Up Location</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="0">Pick Up Location</option>
                                    <option value="1">Dubai</option>
                                    <option value="2">Abu Dhabi</option>
                                    <option value="3">Sharjah</option>
                                    <option value="4">Alain</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col1 c1">
                        <div class="input1_wrapper">
                            <label>Pick Up Date</label>
                            <div class="input1_inner">
                                <input type="text" class="form-control input datepicker" placeholder="Pick Up Date" required>
                            </div>
                        </div>
                    </div>
                    <div class="col2 c5">
                        <div class="select1_wrapper">
                            <label>Drop Off Location</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="0">Drop Off Location</option>
                                    <option value="1">Alain</option>
                                    <option value="2">Sharjah</option>
                                    <option value="3">Abu Dhabi</option>
                                    <option value="4">Dubai</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col1 c2">
                        <div class="input1_wrapper">
                            <label>Return Date</label>
                            <div class="input1_inner">
                                <input type="text" class="form-control input datepicker" placeholder="Return Date">
                            </div>
                        </div>
                    </div>
                    <div class="col3 c6">
                        <button type="submit" class="booking-button">Rent Now</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- Clients -->
    <section class="clients">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="owl-carousel owl-theme">
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/1.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/2.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/3.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/4.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/5.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/6.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/7.png" alt=""></a>
                        </div>
                        <div class="clients-logo">
                            <a href="#0"><img src="img/clients/8.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php

include('footer.php');
?>