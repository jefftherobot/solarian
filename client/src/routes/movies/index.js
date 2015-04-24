import {inject} from 'aurelia-framework';
import {SolarianAPI} from '../../services/solarian_service'

@inject(SolarianAPI)
export class Movies{

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