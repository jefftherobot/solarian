import {Router} from "aurelia-router";

export class App {

	static inject() { return [Router]; }

	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = "Solarian";
			config.map([
				{ route: 'movies',      moduleId: './routes/movies/index',    nav: true },
				//{ route: 'movies/:id/detail',  moduleId: './routes/movies/detail' },
				{ route: '',            redirect: 'movies' }
			]);
		});
	}
}