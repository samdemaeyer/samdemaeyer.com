<?php 
	$emailTo = 'sam_demaeyer@hotmail.com';
	// $emailTo = 'sdemaeyer@activtrades.com';
	$subject = $_REQUEST['subject'];
	$subjectHeader = $_REQUEST['subjectHeader'];
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$msg=$_REQUEST['message'];
	
	$body = "Name: $name \n\nEmail: $email \n\n Subject: $subject \n\nMessage: $msg";
	$headers = 'From: '.$name.' <'.$email.'>' . "\r\n" . 'Reply-To: ' . $email;
	
	mail($emailTo, $subjectHeader, $body, $headers);
	header("Location: http://www.samdemaeyer.com/#/");
?>