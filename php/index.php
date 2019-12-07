
<?php
include('login.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
header("location: ../html/main_page.html");
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Login Form</title>
<link href="../css/loginstyle.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="main">
    <div class="wrapper">
        <h1>Login</h1>
            <div id="login">
        <h2>Login Form</h2>
        <form action="" method="post">
        <label>UserName :</label>
        <input id="name" name="username" placeholder="username" type="text">
        <label>Password :</label>
        <input id="password" name="password" placeholder="**********" type="password">
        <input name="submit" type="submit" value=" Login ">
    </div>
    <span><?php echo $error; ?></span>
    </form>
    </div>
</div>
</body>
</html>