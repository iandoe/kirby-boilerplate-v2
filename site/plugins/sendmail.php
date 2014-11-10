<?php

kirby()->routes(array(
	array(
		'pattern' => 'sendmail',
		'method' => 'GET|POST',
		'action' => function() {

			$siteTitle = site()->title()->toString();
			$mailAddr  = page('contact')->email()->toString();
			$mailField = $_POST['xOa1L'];

			if (r::ajax() && r::is('post')) {

	    		// Message Template
				$body[] = "Nom : " . $_POST['name'];
				$body[] = "Sujet : " . $_POST['subject'];
				$body[] = "E-mail : " . $mailField;
				$body[] = "Téléphone : " . $_POST['phone'];
				$body[] = "---------------------------------------\n";
				$body[] =  $_POST['message'];

				$message_body = implode("\r\n", $body);

				$email = email(array(
					'to'      => $mailAddr,
					'from'    => $_POST['name'] .' <'. $mailField .'>',
					'subject' => 'Formulaire de contact - ' . $siteTitle,
					'body'    => $message_body
					));

			    // If email has been sent
				if($email->send()) {

					return response::json(array(
						'status' => 'ok'
					));

				}
			    // Else redirect to contact page
				} else {
					return go('contact');
			}
		}
	)
));
