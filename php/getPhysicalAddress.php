<?php

    $servername = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'cs3320';

    $con = new mysqli($servername, $user, $pass, $db) or die("Unable to connect");
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    $last_id = $con->insert_id;
    $sql="SELECT address1, address2, city, state, zip FROM userinformation WHERE userID = 1 LIMIT 1";

    $result = mysqli_query($con, $sql);
    if (!$result){
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }

    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);

?>