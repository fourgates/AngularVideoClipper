function VideoEditor($sce){
	'ngInject';
	return{
		scope: {
			
		},
		templateUrl: 'video/video-editor.html',
		controllerAs: '$ctrl',
		controller: function(){
			var ctrl = this;
			ctrl.source = 'http://www.w3schools.com/tags/movie.mp4';
			ctrl.start = 4;
			ctrl.end = 10;
			ctrl.showVideo = true;
			ctrl.clips = [];
		    var video = this.source + '#t='+this.start+',' + this.end;
		    ctrl.clips.push(video);
		    ctrl.addClip = function(src, start, end){
		    	var video = this.source + '#t='+ start + ',' + end;
		        this.clips.push(video);
		    }
		    ctrl.getSrc = function(src){
		    	return trustSrc(src);
		    	
		    }
		    function trustSrc(src) {
		        return $sce.trustAsResourceUrl(src);
		    }
		    
		    ctrl.change = function(d){
		    	ctrl.showVideo = false;
		    	console.log('d', d);
		    	ctrl.showVideo = true;
		    }
		},
		link: function(){
			
		}
	}
}
export default VideoEditor;