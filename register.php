<?php
include_once("connect.php");

    $user_name =$_POST["name"];
	$user_email =$_POST["email"];
    $user_password =$_POST["pass"];
    $re_password = $_POST["pass"];
    $sql = "INSERT INTO userdata(`username`, `email`, `password`, `re-password` ) VALUES ('$user_name', '$user_email', '$user_password', '$re_password'  )";
	mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn)."qqq".$sql);
	echo "registered";
	
?>