import {Router} from 'aurelia-router';
import {SolarianAPI} from '../../services/solarian_service'

export class Movies{
	static inject() { return [Router, SolarianAPI]; }

	constructor(router, SolarianAPI){
		this.solarianAPI = SolarianAPI;
		this.movies = [];
		this.router = router;

		this.router.configure(config => {
			config.map([
				{ route: ['',':id'],  moduleId: './detail' }
			]);
		});
	}

	activate(){
		this.solarianAPI.getAllMovies().then(r => {
			this.movies = r.content;
		});
	}
}