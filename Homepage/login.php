<?php  
	$servername = "localhost";
	$username = "root";
	$password = "pwdpwd";
	$dbname = "username";

	//Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	//Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	//register teacher
	if (isset($_REQUEST['submit'])) {
		//receive all input values from the form
		$username = $_REQUEST['username'];
 
	
	// first check the database to make sure 
 	// a user does not already exist with the same username and/or email
  	//$user_check_query = "SELECT * FROM teacher WHERE TeacherEmail='$email' LIMIT 1"
 	//$result = mysqli_query($conn, $user_check_query);
  	//$user = mysqli_fetch_assoc($result);
  
  	//if ($user) { // if user exists
    	//if ($user['email'] === $email) {
    	//array_push($errors, "email already exists");
    	//}
  	//}
  	$query = "INSERT INTO username (username)
  			  VALUES ('$username')";
  	if(mysqli_query($conn, $query)){
  	$_SESSION['success'] = "You are now logged in";
  	header("Location: index.php");
 		}
 	}
 	else
 	

?>

<!DOCTYPE html>
<html>
<head>
	<title>Cerdik Jawi</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	
 
</head>
<body class="homepage">


<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper" class="wrapper">
					<div id="header">

						<!-- Logo -->
							<div id="logo">
								
								</a>
								<h1><a href="index.html">Cerdik Jawi</a></h1>
								<p>Pembelajaran dan Permainan berasaskan Jawi untuk Kanak Kanak</p>
							</div>

						<!-- Nav -->
							<nav id="nav">
								<ul>
									<li class="current"><a href="index.html">Utama</a></li>
									<li>
										<a href="Pembelajaran.html">Pembelajaran</a
									</li>
									<li>
										<a href="Permainan.html">Permainan</a
									</li>
									<li>
										<a href="Pencapaian.html">Pencapaian</a
									</li>
							
									
								</ul>
							</nav>

					</div>
				</div>

			<!-- Intro -->
				<div id="intro-wrapper" class="wrapper style1">
					<div class="title">Selamat Datang!</div>
					<section id="intro" class="container">	
					<div class="title">Pendaftaran</div>
					<div id="intro" class="container">
						<header class="style1">
							<h2>Daftar Sekarang!</h2>
							<p>
								Daftar ke Cerdik Jawi sekarang untuk mengikuti segala aktiviti yang disediakan. <br />
								
							</p>
						</header>
						
						<div class="container">
							<div class="p">

								<!-- Registration Form -->
									<h3> <center>
									<div class="4u 12u(mobile)">
										<section class="highlight">
										
														<center>
														<div class="header"></div>
														<br>
														</center>
															<form method="POST" action="index.php">
																
																
																<input type="text" placeholder="Nama" name="username">
																
																<br>
																<input type="submit" name="submit" value="Daftar"></div>
														 
															</form>
													
													
											
										</section>
										</div>
									</center>
									</h3>

							</div
						<p class="style3"></section>
				</div>

			
			<!-- Highlights -->
				<div class="wrapper style3">
					<div class="title">Aktivity</div>
					<div id="highlights" class="container">
						<div class="row 150%">
							<div class="4u 12u(mobile)">
								<section class="highlight">
									<a href="Pembelajaran.html" class="image featured"><img src="images/Main1.jpg" alt="" /></a>
									<h3><a href="Pembelajaran.html">Pembelajaran</a></h3>
									<p>Aktiviti yang disediakan dalam modul pembelajaran ialah mengenal huruf Jawi, mengenal nombor Jawi, cara menulis tulisan Jawi dan mewarna!</p>
									
								</section>
							</div>
							<div class="4u 12u(mobile)">
								<section class="highlight">
									<a href="#" class="image featured"><img src="images/Main2.jpg" alt="" /></a>
									<h3><a href="Permainan.html">Permainan</a></h3>
									<p>Pelbagai permainan yang desediakan seperti mengeja perkataan Jawi, mencari perkataan Jawi yang tersembunyi, pilih jawapan yang betul, dan kumupul markah pada setiap permainan!</p>
									
								</section>
							</div>
							<div class="4u 12u(mobile)">
								<section class="highlight">
									<a href="#" class="image featured"><img src="images/Main3.jpg" alt="" /></a>
									<h3><a href="Pencapaian.html">Pencapaian</a></h3>
									<p>Ibubapa atau guru boleh melihat prestasi dan kemajuan anak anak dalam pembelajaran Jawi sepanjang mereka menggunakan Cerdik Jawi!</p>
									
								</section>
							</div>
						</div>
					</div>
				</div>

			

		</div>

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/skel-viewport.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
