<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="fr" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="fr" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="fr" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="fr" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Site Title -->
	<title><?php echo $page->title()->html() ?> - <?php echo $site->title()->html() ?></title>
	<!-- Site Desc -->
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<!-- Site Keywords -->
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

	<!-- CSS Assets -->
	<?php echo css('assets/css/main.min.css') ?>

</head>

<!-- Body -->
<body>
