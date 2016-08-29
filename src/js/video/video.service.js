export default class VideoService{
	constructor(AppConstants, $window){
		'ngInject';

		this._AppConstants = AppConstants;
		this._$window = $window;
	}
	saveVideos(videos){
		this._$window.localStorage[this._AppConstants.videoKey] = JSON.stringify(videos);;
	}
	
	getVideos(){
		var videos = this._$window.localStorage[this._AppConstants.videoKey]
		if(videos){
			return JSON.parse(videos);
		}
	}
	
	destroyVideos(){
		this._$window.localStorage.removeItem(this._AppConstants.videoKey);
	}
}