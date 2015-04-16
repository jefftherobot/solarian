import {SolarianAPI} from '../../services/solarian_service'

export class Movie{
	static inject()  { return [SolarianAPI]; }

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