<?php

if($_POST['yes']){

    $servername = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'cs3320';
    
    $con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }
    $sql="SELECT address1, address2, city, state, zip FROM userinformation WHERE userID = 1";

    $result = mysqli_query($con, $sql);
    if (!$result){
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }
    $returnAddress = "[";
    
    $row = mysqli_fetch_array($result) 
    {
        $returnAddress = $returnAddress . "{address1: \"" . $row['address1'] . "\"," . "address2: \"" . $row['address2'] . "\"," . "city: \"" . $row['city'] . "\"," . "state: \"" . $row['state'] . "\"," . "zip:  \"" . $row['zip'] . "\""},";
    }
     $returnAddress = $returnAddress . "]";   
    
     echo $returnAddress;
    //return $returnStates;
    mysqli_close($con);
}
?>