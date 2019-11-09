<?php 

$servername = 'localhost';
$user = 'root';
$pass = '89.8_CapVB1';
$db = 'cs3320';


$conn = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql="INSERT INTO cs3320.userinformation (fullName, address1, address2, city, state, zip, phone, email) 
VALUES ('$_POST[fullName]','$_POST[addressOne]','$_POST[addressTwo]', 
'$_POST[city]', '$_POST[state]', '$_POST[zipCode]', '$_POST[phoneNumber]', '$_POST[email]')";

$sql2="SELECT userID FROM userinformation WHERE email = '$_POST[email]' ";

if (!mysqli_query($conn,$sql2))
  {
      die('Error: ' . mysqli_error($conn));
      print_r($_POST);
  }

  $_SESSION["userID"] = mysqli_fetch_array($sql2);
  

if (!mysqli_query($conn,$sql))
  {
      die('Error: ' . mysqli_error($conn));
      print_r($_POST);
  }
  else {
    print_r($_POST);
    echo "<br Successfully input your information />";
  }
 
mysqli_close($conn);

?>