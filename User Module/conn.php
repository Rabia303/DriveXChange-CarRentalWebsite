<?php
$servername = "localhost:3307"; // Specify the port after the hostname
$username = "localrabia";
$password = "123";
$dbname = "drivexchange_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";
?>
