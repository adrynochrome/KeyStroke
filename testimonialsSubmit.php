<?php
/******************************************************************************
 * Create the testimony json file
/******************************************************************************/
	$file_name = 'temp/' . date('Y') . '-' . date('m') . '-' . date('d') . '-' . date('H') . '-' . date('i') . '.json';
	$handler = fopen($file_name, 'w');
	fwrite(
		$handler,
		'{ ' . 
			'"name":"' . $_REQUEST['name'] . '",' . 
			'"description":"' . $_REQUEST['description'] . '",' . 
			'"link":"' . $_REQUEST['link'] . '",' . 
			'"siteName":"' . $_REQUEST['siteName'] . '"' . 
		'}'
	);
	fclose($handler);

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
	
	$mail->setFrom('KeystrokeCollab@gmail.com', 'Keystrok Collab');
	$mail->addAddress('KeystrokeCollab@gmail.com', 'Keystrok Collab');
	
	$mail->addAttachment($file_name);
	
	$mail->isHTML(true);
	
	$mail->Subject   = 'New Testimony - ' . $_REQUEST['name'];
	$mail->Body     .= '<p>Greetings,<br/><br/>Someone has submitted a testimony. Below is the information.</p>';
	$mail->Body     .= '<table>';
	$mail->Body     .= '<tr><td>Name</td><td>' . $_REQUEST['name'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Testimony</td><td>' . $_REQUEST['description'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Domain</td><td>' . $_REQUEST['link'] . '</td></tr>';
	$mail->Body     .= '<tr><td>Site Name</td><td>' . $_REQUEST['siteName'] . '</td></tr>';
	$mail->Body     .= '</table>';
	$mail->Body     .= '<p>Thanks,<br/>Keystroke Collab Testimony Form</p>';

	if(!$mail->send()) {
	    echo '{ "fail": "<h1> There was an error processing your request. Please try again.</h1>" }';
	} else {
	    echo '{ "success": "<h1>Thank you, ' . $_REQUEST['name'] . ', your comment is awaiting approval.</h1>" }';
	}

	unlink($file_name);
?>