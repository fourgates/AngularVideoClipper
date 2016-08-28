class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    var video = {
    		source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
    		clips: []			
    }
    this.videos = [video];    
    this.selectedVideos = [];
  }
}

export default HomeCtrl;
