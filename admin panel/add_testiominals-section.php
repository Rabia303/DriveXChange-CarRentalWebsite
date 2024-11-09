<?php
include('nav.php');
include('conn.php');

if (isset($_POST['sub'])) {

    $name = $_POST['name'];
    $testimonial = $_POST['testimonials'];
    $role = $_POST['role'];
    $imga = $_FILES['img']['name'];
    $timg = $_FILES['img']['tmp_name'];
    move_uploaded_file($timg, "uimage/" . $imga);
    $sql = "INSERT INTO `Testimonials`(`t_name`, `Testimonials`, `car_img`,`role`) VALUES ('$name','$testimonial','$imga','$role')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo '<script>
        alert("record inserted");
        </script>';
    } else {
        echo '<script>
        alert("record not inserted");
        </script>';
    }
}
?>

        <div class="menu-backdrop"></div>
        <main class="app-main">
            <header class="main-header d-flex justify-content-between">
                <a href="javascript:;" class="sidebar-menu-trigger"><span>Menu</span></a>
            </header>
            <div class="app-content p6 pb2 smp1">
                <div class="container p0">
                    <form method="post" enctype="multipart/form-data">
                        <div class="row mb5">
                            <!-- Left Column Start -->
                            <div class="col-xxl-8">
                                <div class="row">
                                    <!-- General Start -->
                                    <div class="col-12 mb6">
                                        <div class="card shadow-card p6">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h6 class="mb4">PAGE-TESTIMONIALS</h6>
                                                </div>
                                                <br><br>
                                                <div class="col-12 mb5">
                                                    <label for="add-form-6" class="form-label">
                                                        <span>Name </span>

                                                        <i data-feather="info" stroke-width="2" width="12"
                                                            class="text-body" data-bs-toggle="tooltip"
                                                            data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                            ></i>
                                                    </label>
                                                    <input id="add-form-6" class="form-control slug-target" type="text" name="name">
                                                    <div class="invalid-feedback">Please fill out all fields.</div>
                                                </div>
                                                 <div class="col-12 mb5">
                                                    <label for="add-form-6" class="form-label">
                                                        <span>Testimonials </span>

                                                        <i data-feather="info" stroke-width="2" width="12"
                                                            class="text-body" data-bs-toggle="tooltip"
                                                            data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                            ></i>
                                                    </label>
                                                    <input id="add-form-6" class="form-control slug-target" type="text" name="testimonials">
                                                    <div class="invalid-feedback">Please fill out all fields.</div>
                                                </div>
                                                <div class="col-12 mb5">
                                                    <label for="add-form-6" class="form-label">
                                                        <span>role </span>

                                                        <i data-feather="info" stroke-width="2" width="12"
                                                            class="text-body" data-bs-toggle="tooltip"
                                                            data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                            ></i>
                                                    </label>
                                                    <input id="add-form-6" type="text" name="role">
                                                  
                                                </div>
                                                <div class="col-12 mb-5">
                                                    <label for="carImage" class="form-label">
                                                        <span>Customer Image</span>
                                                    </label>
                                                    <input name="img"  id="carImage" class="form-control" type="file">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Left Column End -->
                            <!-- Buttons Start -->
                            <div class="col-12 text-end">
                                <button type="submit" class="btn btn-primary" name="sub">Save changes</button>
                            </div>
                            <!-- Buttons End -->
                        </div>
                    </form>
                    <!-- Content End -->

                    <?php
            include('footer.php');
            ?>