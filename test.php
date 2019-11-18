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
    echo "<br/>";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

$conn2 = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
}

$init = file_get_contents("sql/cs3320.sql");

//$sql = file_get_contents('sql/cs3320.sql');

if ($conn2->multi_query($init) === TRUE) {
    echo "Data tables for cs3320 created successfully";
    echo "<br/>";
} else {
    echo "Error creating tables: " . $conn2->error;
}
// this code is in case more queries want to be run after this one. 
// You need to clear results of queries in order to run more.
// do {
//     if ($res = $conn2->store_result()) {
//       $res->free();
//     }
//    } while ($conn2->more_results() && $conn2->next_result());


$conn2->close();
?>