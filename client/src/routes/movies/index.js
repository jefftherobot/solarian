import {SolarianAPI} from '../../services/solarian_service'

export class Movies{
	static inject() { return [SolarianAPI]; }

	constructor(SolarianAPI){
		this.solarianAPI = SolarianAPI;
		this.movies = [];
	}

	activate(){
		this.solarianAPI.getAllMovies().then(r => {
			this.movies = r.content;
		});
	}
}