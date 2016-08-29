class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    var ctrl = this;
    ctrl.appName = AppConstants.appName;
    var video = {
    		source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
    		clips: []			
    }
    ctrl.videos = [video];    
    ctrl.selectedVideos = [];
    ctrl.removeSelectedVideo = function(video){
    	if(video){
    		var index = ctrl.selectedVideos.indexOf(video);
    		if(index > -1){
    			ctrl.selectedVideos.splice(index, 1);
    		}
    	}
    }
    ctrl.formState = {editing: false};
  }
}

export default HomeCtrl;
