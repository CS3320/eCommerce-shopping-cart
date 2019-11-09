<?php

if($_POST['yes']){

    $servername = 'localhost';
    $user = 'root';
    $pass = '89.8_CapVB1';
    $db = 'cs3320';
    
    $con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }
    
    $userID = $_SESSION['userID'];

    $sql="SELECT address1, address2, city, state, zip FROM userInformation WHERE userID = $userID FOR JSON AUTO";

    $result = mysqli_query($con, $sql);
    if (!$result){
        printf("Error: %s\n", mysqli_error($con));
        exit();
}
        
    echo $result;
    //return $result;
    mysqli_close($con);
}
?>