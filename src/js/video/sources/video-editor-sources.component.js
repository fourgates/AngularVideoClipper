class VideoEditorSourcesCtrl {
  constructor($scope) {
    'ngInject';
    
    this.addVideo = function(video){
    	if(video){
    		var index = this.selectedVideos.indexOf(video);
    		if(index == -1){
    			this.selectedVideos.push(video);
    		}
    	}
    }
    this.deleteVideo = function(video){
    	if(video){
    		deleteFromArray(video, this.videos);
    		deleteFromArray(video, this.selectedVideos);
    	}
    }
    function deleteFromArray(video, array){
    	var index = array.indexOf(video);
		if(index > -1){
			array.splice(index, 1);
		}
    }
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
