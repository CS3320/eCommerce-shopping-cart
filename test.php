<?php

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';
   
$conn = new mysqli($servername, $user, $pass) or die("Unable to connect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$database = "CREATE SCHEMA IF NOT EXISTS cs3320";

if ($conn->query($database) === TRUE) {
    echo "Database cs3320 created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

$conn2 = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
}

$tables = "CREATE TABLE IF NOT EXISTS cs3320.Orders (
  userID INT(10) UNSIGNED NOT NULL,
  orderNumber INT(10) UNSIGNED NOT NULL,
  productID INT(10) UNSIGNED NOT NULL,
  quantity VARCHAR(45) NOT NULL,
  totalPrice DOUBLE NOT NULL,
  PRIMARY KEY (userID)
  );
  
  CREATE TABLE IF NOT EXISTS cs3320.PaymentInformation (
  userID INT(10) UNSIGNED NOT NULL,
  cardType VARCHAR(45) NOT NULL,
  cardNumber INT(10) UNSIGNED NOT NULL,
  expDate INT(11) NOT NULL,
  PRIMARY KEY (userID)
  );";


//$sql = file_get_contents('sql/cs3320.sql');

if ($conn2->query($tables) === TRUE) {
    echo "Table cs3320 created successfully";
} else {
    echo "Error creating table: " . $conn2->error;
}

echo"Great work!!!";


?>