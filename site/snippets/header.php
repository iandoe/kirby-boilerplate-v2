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
	<title><?= $page->title()->html() ?> - <?= $site->title()->html() ?></title>
	<!-- Site Desc -->
	<meta name="description" content="<?= $site->description()->html() ?>">
	<!-- Site Keywords -->
	<meta name="keywords" content="<?= $site->keywords()->html() ?>">

	<!-- CSS Assets -->
	<?= css('assets/css/style.min.css') ?>

	<!-- JS Assets async loading -->
	<script src="<?= url('/assets/js/dist/LAB.min.js') ?>" async onload='
	 $LAB
	    .script("//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js").wait()
	    .script("<?= url('assets/js/main.min.js') ?>")
	    '>
	</script>

</head>

<!-- Body -->
<body>
