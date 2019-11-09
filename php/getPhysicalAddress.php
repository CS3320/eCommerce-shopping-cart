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
    $sql="SELECT address1 FROM userinformation";

    $result = mysqli_query($con, $sql);
    if (!$result){
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }
        $returnStates = 
        
    echo $returnStates;
    //return $returnStates;
    mysqli_close($con);
}
?>