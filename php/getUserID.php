<?php

$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'cs3320';

$con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
$sql="SELECT userID FROM UserInformation";

$result = mysqli_query($con, $sql);
if (!$result){
    printf("Error: %s\n", mysqli_error($con));
    exit();
}

if($row = $result->fetch_assoc()) {
    $returnID = $result;
    echo $row['userID']."<br>";
}

mysqli_close($con);

?>
