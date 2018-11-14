<?php

// Message vars if errors or if email was sent
$msg = '';
$msgClass = '';
$msgSuccess = '';
$msgClassSuccess = '';

// Check for submit
if (isset($_POST['submit'])) {
	$name = htmlspecialchars($_POST['name']);
	$mailFrom = htmlspecialchars($_POST['mail']);
	$message = htmlspecialchars($_POST['message']);

	if (isset($_POST['email-subject'])) {
		$emailSubject = htmlspecialchars($_POST['email-subject']);
	}

	// Check qll required fields
	if (!empty($name) && !empty($mailFrom) && !empty($emailSubject) && !empty($message)) {
		// Passed

		// Check if name is valid
		if(!preg_match("/^\pL+(?>[- ']\pL+)*$/u", $name)) {
		// Name not valid
			$msg = "Le nom ne doit pas contenir de caractères spéciaux";
			$msgClass = 'contact-form__alert';
		} elseif 
		//Check if email is valid
			(filter_var($mailFrom, FILTER_VALIDATE_EMAIL) === false) {
		// Email not valid
			$msg = "L'email n'est pas valide";
			$msgClass = 'contact-form__alert';
		} else {
		// Passed
			$mailTo = "contact@courseille-psy.fr";
			$subject = "Demande de contact de ".$name;
			$body = "<h2>Demande de contact via le formulaire</h2>
			<h4>Nom</h4><p>'.$name.'</p>
			<h4>Sujet</h4><p>'.$emailSubject.'</p>
			<h4>Message</h4><p>'.$message.'</p>
			<h4>Contact email</h4><p>'.$mailFrom.'</p>";

			$headers = "MIME-Version: 1.0" ."\r\n";
			$headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";

			$headers .= "From : " .$name. "<".$mailFrom.">". "\r\n" .
				"Reply-To:".$mailFrom. "\r\n";

		// Message to alert if email was sent or not	
			if(mail($mailTo, $subject, $body, $headers)) {
				$msgSuccess = "Votre message a bien été envoyé";
				$msgClassSuccess = 'contact-form__alert__success';
				$name = $mailFrom = $message = $emailSubject = '';
			} else {
				$msg = "L'email n'a pas été envoyé";
				$msgClass = 'contact-form__alert';
			}
		}
	} else {
		$msg = "Vous n'avez pas rempli tous les champs";
		$msgClass = 'contact-form__alert';
	}
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}