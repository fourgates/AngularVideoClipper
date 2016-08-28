class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    this.clips = [];
    var video = {
    		source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
    		clips: []			
    }
    
    this.videos = [video];
    
    this.selectedVideos = [];
    this.selectVideo = function(video){
    	this.selectedVideos.push(video);
    }
    
    this.deleteVideo = function(video){
    	if(video){
    		deleteFromArray(video, this.videos);
    		deleteFromArray(video, this.selectedVideos);
    	}
    }
    
    this.addVideo = function(video){
    	if(video){
    		var index = this.selectedVideos.indexOf(video);
    		if(index == -1){
    			this.selectedVideos.push(video);
    		}
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

export default HomeCtrl;
