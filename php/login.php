<?php
session_start(); // Starting Session
$error=''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else
{
// Define $username and $password
$username=$_POST['username'];
$password=$_POST['password'];
// Establishing Connection with Server by passing server_name, user_id and password as a parameter
$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';

$con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");

if ($con->connect_error) {
     die("Connection failed: " . $con->connect_error);
}
// To protect MySQL injection for Security purpose
$username = stripslashes($username);
$password = stripslashes($password);
$username = mysqli_real_escape_string($con,$username);
$password = mysqli_real_escape_string($con,$password);

$sql = "SELECT * from usercredentials where password='$password' AND username='$username'";
// SQL query to fetch information of registerd users and finds user match.

$query = mysqli_query($con, $sql);
if (!$query){
    printf("Error: %s\n", mysqli_error($con));
    exit();
}

$rows = mysqli_num_rows($query);
if ($rows == 1) {
$_SESSION['login_user']=$username; // Initializing Session
header("location: ../html/main_page.html"); // Redirecting To Other Page
} else {
$error = "Username or Password is invalid";
}
mysqli_close($con); // Closing Connection
}
}
?>
