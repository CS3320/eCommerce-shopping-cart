<?php 

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';
   
$conn = new mysqli($servername, $user, $pass) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql="INSERT INTO cs3320.paymentinformation (userID, cardType, cardNumber, expDate)
VALUES
('$_POST["123"]','$_POST[payment_type]','$_POST[cardNumber]','$_POST[expDate]')";


//execute the INSERT
if (!mysqli_query($con,$sql))
  {
      die('Error: ' . mysqli_error($con));
  }
  else {
      echo "<br>1 record added";
  }
 
mysqli_close($con);

?>

