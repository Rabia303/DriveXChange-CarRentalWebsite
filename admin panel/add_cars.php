<?php
include('nav.php');
include('conn.php');

if (isset($_POST['sub'])) {
    $Car_Name = $_POST['car_name'];
    $Year = $_POST['year'];
    $Model = $_POST['model'];
    $Color = $_POST['color'];
    $Total_Earning = $_POST['total_earnings'];
    $Fuel = $_POST['fuel'];
    $License_Plate = $_POST['license'];
    $Daily_rate = $_POST['daily_rate'];
    $Brand = $_POST['brand'];
    $Doors = $_POST['doors'];
    $Passengers = $_POST['passengers'];
    $Age = $_POST['age'];
    $Luggage = $_POST['luggage'];
    $Air_Conditioner = $_POST['Air_Conditioner'];
    $Transmission = $_POST['transmission'];
    $Status = $_POST['status'];
    $imga = $_FILES['img']['name'];
    $timg = $_FILES['img']['tmp_name'];

    move_uploaded_file($timg, "uimage/" . $imga);

    $sql = "INSERT INTO `car`(`Car_Name`, `Year`, `Model`, `Color`, `Total_Earning`, 
    `Fuel`, `License_Plate`, `Daily_rate`, `Brand`, `Doors`, `Passengers`, `Age`, `Luggage`, 
    `Transmission`, `Air_Conditioner`, `Status`, `img`) 
    VALUES ('$Car_Name','$Year','$Model','$Color','$Total_Earning','$Fuel','$License_Plate',
    '$Daily_rate','$Brand','$Doors','$Passengers','$Age','$Luggage','$Transmission','$Air_Conditioner',
    '$Status','$imga')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo '<script>alert("Record inserted");</script>';
    } else {
        echo '<script>alert("Record not inserted");</script>';
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
            <h4>Add Images</h4>
            <!-- Content Start -->
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
                                            <h6 class="mb4">Add Images</h6>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="car_name" class="form-label">
                                                <span>Car Name</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type a name of a Car."></i>
                                            </label>
                                            <input id="car_name" class="form-control slug-target" type="text" name="car_name">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="year" class="form-label">
                                                <span>Year</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the year of the car."></i>
                                            </label>
                                            <input id="year" class="form-control slug-target" type="text" name="year">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="model" class="form-label">
                                                <span>Model</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the model of the car."></i>
                                            </label>
                                            <input id="model" class="form-control slug-target" type="text" name="model">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="color" class="form-label">
                                                <span>Color</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the color of the car."></i>
                                            </label>
                                            <input id="color" class="form-control slug-target" type="text" name="color">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="total_earnings" class="form-label">
                                                <span>Total Earnings</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the total earnings of the car."></i>
                                            </label>
                                            <input id="total_earnings" class="form-control slug-target" type="text" name="total_earnings">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="fuel" class="form-label">
                                                <span>Fuel Consumption (KM)</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the fuel consumption of the car."></i>
                                            </label>
                                            <input id="fuel" class="form-control slug-target" type="text" name="fuel">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="license" class="form-label">
                                                <span>License Plate</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                    data-bs-title="Type the license plate number of the car."></i>
                                            </label>
                                            <input id="license" class="form-control slug-target" type="text" name="license">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="daily_rate" class="form-label">
                                                <span>Daily rate</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="daily_rate" class="form-control slug-target" type="text" name="daily_rate">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="brand" class="form-label">
                                                <span>Brand</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="brand" class="form-control slug-target" type="text" name="brand">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="doors" class="form-label">
                                                <span>Doors</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="doors" class="form-control slug-target" type="text" name="doors">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="passengers" class="form-label">
                                                <span>Passengers</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="passengers" class="form-control slug-target" type="text" name="passengers">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="age" class="form-label">
                                                <span>Age</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="age" class="form-control slug-target" type="text" name="age">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="luggage" class="form-label">
                                                <span>Luggage</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="luggage" class="form-control slug-target" type="text" name="luggage">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="Air_Conditioner" class="form-label">
                                                <span>Air Conditioner</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="Air_Conditioner" class="form-control slug-target" type="text" name="Air_Conditioner">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="transmission" class="form-label">
                                                <span>Transmission</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="transmission" class="form-control slug-target" type="text" name="transmission">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="status" class="form-label">
                                                <span>Status</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="status" class="form-control slug-target" type="text" name="status">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                        <div class="col-sm-3 mb5">
                                            <label for="img" class="form-label">
                                                <span>Image</span>
                                                <i data-feather="info" stroke-width="2" width="12"
                                                    class="text-body" data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    data-bs-custom-class="qd-tooltip"></i>
                                            </label>
                                            <input id="img" class="form-control slug-target" type="file" name="img">
                                            <div class="invalid-feedback">Please fill out all fields.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Left Column End -->
                        </div>
                        <div class="row">
                            <div class="col-sm-12 mb5">
                                <div class="card shadow-card p4 p-md6">
                                    <div class="row align-items-center">
                                        <div class="col-md-8 text-md-end">
                                            <button type="submit" name="sub" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- Content End -->
                </div>
            </div>
        </main>
        <!-- ***** Main End ***** -->
    </div>
</body>
</html>
