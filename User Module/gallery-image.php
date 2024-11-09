<?php
include("header.php");
?>
    <!-- Header Banner -->
    <section class="banner-header section-padding bg-img" data-overlay-dark="5" data-background="img/slider/1.jpg">
        <div class="v-middle">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h6>Our Portfolio</h6>
                        <h1>Image Gallery</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- divider line -->
    <div class="line-vr-section"></div>
    <!-- Gallery Image -->
    <section class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <ul class="gallery-filter">
                    <li class="active" data-filter="*">All</li>
                    <li data-filter=".luxurycars">Luxury Cars</li>
                    <li data-filter=".sportcars">Sport Cars</li>
                    <li data-filter=".suv">SUV</li>
                </ul>
            </div>
        </div>
        <div class="row gallery-items">
        <?php
            include('conn.php');
            $sql = "SELECT * FROM `gallery`";
            $result = mysqli_query($conn, $sql);
            while ($row = mysqli_fetch_array($result)) {
                // Assuming you have a column 'Category' to differentiate between luxury, sport, and SUV
                $categoryClass = strtolower($row['Category']); // Ensure category names match the classes used in the filter
        ?>
            <div class="col-lg-4 col-md-6 single-item <?php echo $categoryClass; ?> mb-15">
                <a href="img/gallery/1.jpg" title="" class="gallery-masonry-item-img-link img-zoom">
                    <div class="gallery-box">
                        <div class="gallery-img">
                            <img src="../admin panel/gallery/<?php echo $row['CarImage']; ?>" alt="<?php echo $row['Car_Name']; ?>" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="bottom-fade"></div>
                        <div class="gallery-detail">
                            <h4><?php echo $row['Car_Name']; ?></h4>
                        </div>
                    </div>
                </a>
            </div>
        <?php
            }
        ?>
        </div>
    </div>
</section>

    <!-- Lets Talk -->
    <section class="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/slider/3.jpg">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h6>Rent Your Car</h6>
                    <h5>Interested in Renting?</h5>
                    <p>Don't hesitate and send us a message.</p> <a href="tel:+8001234567" class="button-1 mt-15 mb-15 mr-10"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a> <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" class="button-2 mt-15 mb-15">Rent Now <span class="ti-arrow-top-right"></span></a>
                </div>
            </div>
        </div>
    </section>
    <?php

include('footer.php');
?>