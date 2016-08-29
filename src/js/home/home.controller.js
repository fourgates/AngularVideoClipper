class HomeCtrl {
  constructor(AppConstants, VideoService) {
    'ngInject';
    var ctrl = this;
    ctrl.appName = AppConstants.appName;
    var cachedVideos = VideoService.getVideos();
    if(cachedVideos){
    	ctrl.videos = cachedVideos;
    }
    else{
    	var video = {
        		source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        		clips: []			
        }
        ctrl.videos = [];
    }
        
    ctrl.selectedVideos = [];
    ctrl.removeSelectedVideo = function(video){
    	if(video){
    		var index = ctrl.selectedVideos.indexOf(video);
    		if(index > -1){
    			ctrl.selectedVideos.splice(index, 1);
    		}
    	}
    }
    ctrl.formState = {editing: true};
  }
  
  toggleReadOnly(){
	  this.readOnly = !this.readOnly; 
	  if(this.readOnly){
		  this.formState.editing = false;
	  }
	  else{
		  this.formState.editing = true;
	  }
  }
}

export default HomeCtrl;
