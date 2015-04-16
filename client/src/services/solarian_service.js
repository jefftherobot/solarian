import {HttpClient} from 'aurelia-http-client';

export class SolarianAPI {
	static inject() { return [HttpClient]; }
	constructor(http){
		this.http = http;
		this.baseUrl = "http://jefftherobot.com/medialibrary/api/";
	}

	getAllMovies(){
		return this.http.get(this.baseUrl + 'movies');
	}

	getMovie(id){
		return this.http.get(this.baseUrl + 'movies/'+id);
	}
}