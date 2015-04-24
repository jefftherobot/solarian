import {inject} from 'aurelia-framework';
import {SolarianAPI} from '../../services/solarian_service'

@inject(SolarianAPI)

export class Movie{

	constructor(SolarianAPI){
		this.solarianAPI = SolarianAPI;
		this.movie = [];
	}

	activate(params){
		var id = params.id;

		if(id!==undefined){
			this.solarianAPI.getMovie(id).then(r => {
				this.movie = r.content;
			});
		}
	}
}