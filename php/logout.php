<?php
session_start();
if(session_destroy()) // Destroying All Sessions
{
header("Location: ../php/index.php"); // Redirecting To Sing-In Page
}
?>
