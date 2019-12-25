<?php  
	$servername = "localhost";
	$username = "id12020670_root";
	$password = "pwdpwd";
	$dbname = "id12020670_username";

	//create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	//create connection
	if ($conn->connect_error) 
	{
		die("Connection failed: ". $conn->connect_error);
	}
?>