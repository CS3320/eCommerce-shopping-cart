<?php 

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';


$conn = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//$rand = rand(0,5000);

$sql="INSERT INTO cs3320.paymentinformation (cardType, cardNumber, expDate) 
VALUES ('$_POST[payment_type]','$_POST[cardnumber]','$_POST[month]')";

// $sql2="INSERT INTO cs3320.orders (orderNumber, productID, quantity, totalPrice) 
// VALUES ($rand,1234,'$_POST[quantity]','$_POST[orderTotal]')""

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

