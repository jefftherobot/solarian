<?php

	$app->get('/movies(/:id)', function ($id = null) use ($app, $db) {

    $rootObj = new stdClass();

		if (null === $id) {


      $results = ORM::for_table('movie')
                ->raw_query('SELECT m.idMovie AS id,
                              m.c00 AS title,
                              m.c03 AS tagline,
                              m.c07 AS year,
                             (SELECT url FROM art WHERE media_id = m.idMovie AND type = ? AND media_type = ?) AS poster,
                             (SELECT url FROM art WHERE media_id = m.idMovie AND type = ? AND media_type = ?) AS fanart
                             FROM movie m
                             ORDER BY title',
                             array('poster', 'movie', 'fanart', 'movie'))
                ->find_array();

                //$results ->set('poster', 'jeff')->find_array();
                //print_r($results);

      /*
     foreach ($movies as &$movie){
        $movie['id'] = (int) $movie['id'];
         foreach ($movieArts as $movieArt){
          if($movieArt['media_id'] == $movie['id']){
            if($movieArt['type'] == 'poster'){
				      $movie['poster'] = str_replace("original", "w300", $movieArt['url']);
			       }else if($movieArt['type'] == 'fanart'){
              $movie['fanart'] = $movieArt['url'];
             }
          }
        }
     }*/

     //$rootObj->movies = $results;
     $rootObj = $results;

		}else {
      $movies  = ORM::for_table('movie')
                      ->select('idMovie', 'id')
                      ->select('c00', 'title')
                      ->select('c01', 'plot')
                      ->select('c02', 'outline')
                      ->select('c03', 'tagline')
                      ->select('c06', 'writers')
                      ->select('c07', 'year')
                      ->select('c11', 'runtime')
                      ->select('c12', 'rating')
                      ->select('c14', 'genre')
                      ->select('c15', 'director')
                      ->select('c18', 'studio')
                      ->select('c19', 'trailer')
                      ->find_one($id);

      $movieArts      = ORM::for_table('art')
                      ->select('type')
                      ->select('url')
                      ->where('media_id', $id)
                      ->where('media_type', 'movie')
                      ->find_array();

       $arts = new stdClass();
    foreach ($movieArts as $movieArt){
       $arts->$movieArt['type'] = $movieArt['url'];
    }
      $movies->art = $arts;
      $results = $movies->as_array();
		}

	 $app->response()->header('Content-Type', 'application/json');
   echo json_encode($results);

	});
?>
