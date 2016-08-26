class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    this.clips = [];
    this.source = 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4';
  }


}

export default HomeCtrl;
