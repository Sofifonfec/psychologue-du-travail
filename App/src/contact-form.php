<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	

	if (!empty($mailFrom) && !empty($name) && !empty($message)) {
		echo 'Passed';
		else {
			echo 'No no no';
		}
	}

	
	header("Location: index.html");
}