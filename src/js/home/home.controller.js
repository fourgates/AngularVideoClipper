class HomeCtrl {
  constructor(AppConstants, $sce, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    this.source = 'http://www.w3schools.com/tags/movie.mp4';
    this.start = 4;
    this.end = 10;
    this.showVideo = true;
    this.clips = [];
    var video = this.source + '#t='+this.start+',' + this.end;
    this.clips.push(video);
    this.addClip = function(src, start, end){
    	var video = this.source + '#t='+ start + ',' + end;
        this.clips.push(video);
    }
    this.getSrc = function(src){
    	return trustSrc(src);
    	
    }
    function trustSrc(src) {
        return $sce.trustAsResourceUrl(src);
    }
    
    this.change = function(d){
    	this.showVideo = false;
    	console.log('d', d);
    	this.showVideo = true;
    }
    $scope.$watch('start', function(c){
    	console.log('c',c);
    })
  }


}

export default HomeCtrl;
