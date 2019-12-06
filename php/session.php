<?php
$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';

$con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
session_start();// Starting Session
// Storing Session
$user_check=$_SESSION['login_user'];
// SQL Query To Fetch Complete Information Of User
$ses_sql=mysql_query("select username from usercredentials where username='$user_check'", $connection);
$row = mysql_fetch_assoc($ses_sql);
$login_session =$row['username'];
if(!isset($login_session)){
mysql_close($connection); // Closing Connection
header('Location: ../html/main_page.php'); // Redirecting To Home Page
}
?>
