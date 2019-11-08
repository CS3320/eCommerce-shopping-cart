<?php 

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';


$conn = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql="INSERT INTO cs3320.paymentinformation (cardType, cardNumber, expDate) 
VALUES ('$_POST[payment_type]','$_POST[cardnumber]','$_POST[month]')";


//execute the INSERT
if (!mysqli_query($conn,$sql))
  {
      die('Error: ' . mysqli_error($conn));
  }
  else {
    print_r($_POST);
  }
 

//$reference_number = 'UON-' . time();

mysqli_close($conn);

?>

