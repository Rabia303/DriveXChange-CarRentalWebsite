<?php
include('nav.php');
include('conn.php');

if(isset($_POST['sub'])){
    include('conn.php');
    $uname=$_POST['cat'];
    $sql="INSERT INTO `category`(`cat_name`) VALUES ('$uname')";
   $result= mysqli_query($conn,$sql);
    if($result){
echo '<script>
alert("record inserted");
</script>';
    }
    else{
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
                                                    <h6 class="mb4">Page-Gallery</h6>
                                                </div>
                                                <br><br>
                                                <div class="col-12 mb5">
                                                    <label for="add-form-6" class="form-label">
                                                        <span>Add Category</span>

                                                        <i data-feather="info" stroke-width="2" width="12"
                                                            class="text-body" data-bs-toggle="tooltip"
                                                            data-bs-placement="right" data-bs-custom-class="qd-tooltip"
                                                            data-bs-title="Type a name of a Car."></i>
                                                    </label>
                                                    <input id="add-form-6" name="cat" class="form-control slug-target" type="text">
                                                    <div class="invalid-feedback">Please fill out all fields.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                <button type="submit" name="sub" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </form>
                    <?php
            include('footer.php');
            ?>