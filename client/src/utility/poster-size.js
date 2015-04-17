//"w92", "w154", "w185", "w342", "w500", "w780", "original"

export class PosterSizeValueConverter {
	toView(val, size) {
		return val.filter(item => item['poster'] = item['poster'].replace(/original/g,size));
	}
}