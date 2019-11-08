<?php
$servername = 'localhost';
$user = 'root';
$pass = '89.8_CapVB1';
$db = 'cs3320';
   
$con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
$sql = "INSERT INTO cs3320.UserInformation (fullName, address1, address2, city, state, zip, email, phone)

VALUES
('$_POST[fullName]','$_POST[addressOne]','$_POST[addressTwo]','$_POST[city]','$_POST[state]','$_POST[zipCode]','$_POST[email]','$_POST[phoneNumber]')";
//('Test','Tester')";
echo $sql;
//execute the INSERT
if (!mysqli_query($con,$sql))
  {
      die('Error: ' . mysqli_error($con));
  }
  else {
      echo "<br>1 record added";
  }
 
mysqli_close($con)
?>