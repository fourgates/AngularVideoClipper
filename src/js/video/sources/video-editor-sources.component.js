class VideoEditorSourcesCtrl {
  constructor(VideoService) {
    'ngInject';
    this._VideoService = VideoService;
  }
  // add video to selected videos (queued to be played)
  addVideo(video){
  	if(video){
  		var index = this.selectedVideos.indexOf(video);
  		if(index == -1){
  			this.selectedVideos.push(video);
  		}
  	}
  }
  // delete source from sources and selected videos
  deleteVideo(video){
  	if(video){
  		deleteFromArray(video, this.videos);
  		deleteFromArray(video, this.selectedVideos);
  	}
  }
  // remove all videos currently and from local storage
  deleteVideos(){
	  this.videos = [];
	  this.selectedVideos = [];
	  this._VideoService.destroyVideos();
	  alert('Videos removed from cache');
  }
  // save videos to local storage
  saveVideos(videos){
	  this._VideoService.saveVideos(videos);
	  alert('Videos saved to local storage!');
  }
}

function deleteFromArray(video, array){
	var index = array.indexOf(video);
	if(index > -1){
		array.splice(index, 1);
	}
}

let VideoEditorSources = {
  controller: VideoEditorSourcesCtrl,
  templateUrl: 'video/sources/video-editor-sources.html',
  bindings:{
		videos: '=',
		selectedVideos: '=',
		formState: '='
  }
};

export default VideoEditorSources;
