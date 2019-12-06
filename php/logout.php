<?php
session_start();
if(session_destroy()) // Destroying All Sessions
{
header("Location: ../html/index.html"); // Redirecting To Sing-In Page
}
?>
