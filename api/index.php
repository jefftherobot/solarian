<?php
	require_once 'vendor/idiorm.php';
	require_once 'vendor/Slim/Slim.php';

	ORM::configure('mysql:host=localhost;dbname=MyVideos90;charset=utf8');
	ORM::configure('username', 'kodi');
	ORM::configure('password', 'kodi');

	ORM::configure('id_column_overrides', array(
    	'art' => 'art_id',
    	'movie' => 'idMovie',
	));

	\Slim\Slim::registerAutoloader();

	$app = new \Slim\Slim();
	require 'routes/movie.php';
	$app->run();
?>
