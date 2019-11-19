<?php 

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';


$conn = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql="INSERT INTO cs3320.shippinginformation (address1, address2, city, state, zip) 
VALUES ('$_POST[addressOne]','$_POST[addressTwo]', 
'$_POST[city]', '$_POST[stateDD]', '$_POST[zipCode]')";


if (!mysqli_query($conn,$sql))
  {
      die('Error: ' . mysqli_error($conn));
      print_r($_POST);
  }
  else {
    //print_r($_POST);
    print "<h2><center><font face='Arial' color='white' text-align='center' margin='100px'> Information saved! </font></center></h2> <br>";
  }
 
mysqli_close($conn);

?>