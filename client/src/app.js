import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";

@inject(Router)
export class App {
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = "Solarian";
			config.map([
				{ route: ['','movies'],  moduleId: './routes/movies/index',    nav: true, title: 'Movies' },
				{ route: 'movies/:id',   moduleId: './routes/movies/detail' },
				{ route: 'tvshows',      moduleId: './routes/tvshows/index',   nav: true, title: 'TV Shows'},
				{ route: 'tvshows/:id',  moduleId: './routes/tvshows/detail' }
			]);
		});
	}
}