class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    this.clips = [];
    var video = {
    		source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
    		clips: []			
    }
    
    this.videos = [];
    
    this.log = function(){console.log(this.selectedVideo)};
    this.selectVideo = function(video){
    	this.selectedVideo = video;
    }
    this.deleteVideo = function(video){
    	if(video){
    		var index = this.videos.indexOf(video);
    		if(index > -1){
    			this.videos.splice(index, 1);
    		}
    	}
    }
  }


}

export default HomeCtrl;
