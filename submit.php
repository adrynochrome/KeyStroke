<?php
/*
	echo "<p>Request</p>";
	echo "<pre>";
	print_r($_REQUEST);
	echo "<pre>";
	
	echo "<p>Files</p>";
	echo "<pre>";
	print_r($_FILES);
	echo "<pre>";
*/
	
/******************************************************************************
 * Save the file upload
 * Parse the form data
 * Build the email to client and self
 * send the email
 * remove the files
 * show error on fail or success on send
/******************************************************************************/

/******************************************************************************
 * Save the files upload
/******************************************************************************/
	if(isset($_FILES['image1']))
	{
		move_uploaded_file($_FILES['image1']['tmp_name'], 'temp/'. $_FILES['image1']['name']);
	}
	
	if(isset($_FILES['image2']))
	{
		move_uploaded_file($_FILES['image2']['tmp_name'], 'temp/'. $_FILES['image2']['name']);
	}

/******************************************************************************
 * Build the email to client and self
/******************************************************************************/
	include 'classes/PHPMailerAutoload.php';
	include 'pass.php';

	$mail = new PHPMailer;
	
//	$mail->SMTPDebug = 3;
	
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'keystrokecollab@gmail.com';
	$mail->Password = $pass;
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;
	
	$mail->setFrom($_REQUEST['email'], $_REQUEST['name']);
	$mail->addAddress('KeystrokeCollab@gmail.com', 'Keystrok Collab');
	$mail->addReplyTo($_REQUEST['email'], $_REQUEST['name']);
	
	if(isset($_FILES['image1']))
		$mail->addAttachment('temp/'. $_FILES['image1']['name']);
	if(isset($_FILES['image2']))
		$mail->addAttachment('temp/'. $_FILES['image2']['name']);
		
	$mail->isHTML(true);
	
	$mail->Subject   = 'New Contact - ' . $_REQUEST['name'];
	$mail->Body     .= '<p>Greetings,<br/><br/>Someone has requested a quote. Below is the information.</p>';
	$mail->Body     .= '<table>';
	$mail->Body     .= '<tr><td>Name</td><td>' . $_REQUEST['name'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Phone</td><td>' . $_REQUEST['phone'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Email</td><td>' . $_REQUEST['email'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Domain</td><td>' . $_REQUEST['domain'] . '</td></tr>';
	if($_REQUEST['type'] == 'Other')
		$mail->Body .= '<tr><td>Type</td><td>' . $_REQUEST['other'] . '</td></tr>';
	else
		$mail->Body .= '<tr><td>Type</td><td>' . $_REQUEST['type'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Description</td><td>' . $_REQUEST['description'] . '</td></tr>';
	$mail->Body     .= '</table>';
	$mail->Body     .= '<p>Thanks,<br/>Keystroke Collab Contact Form</p>';
	
	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}

/******************************************************************************
 * Delete the uploaded pics
/******************************************************************************/
	
	if(isset($_FILES['image1']))
	{
		unlink('temp/'. $_FILES['image1']['name']);
	}
	
	if(isset($_FILES['image2']))
	{
		unlink('temp/'. $_FILES['image2']['name']);
	}
	
	
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Thank You!</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="index_style.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<div id="banner">
		<a href="index.html"><img src="imgs/banner.gif" /></a>
	</div>
	<div id="navbar">
		<ul>
			<li><a href="index.html">Home</a> |</li>
			<li> <a href="team.html">The Team</a> |</li>
			<li><a href="contact.html"> Contact Us</a> |</li>
			<li><a href="testimonials.html"> Testimonials</a> |</li>
			<li><a href="pmt.html">Payments</a></li>
		</ul>
	</div>
	<div id="content">
		<h1> Thank you for contacting us, we will get back to you as soon as possible!</h1>
	</div>


	</div>
</body>

</html>