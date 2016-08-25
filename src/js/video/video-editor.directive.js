function VideoEditor($sce){
	'ngInject';
	return{
		scope: {
			clips: '='
		},
		templateUrl: 'video/video-editor.html',
		controllerAs: '$ctrl',
		controller: function($scope){
			'ngInject';
			var ctrl = this;
			ctrl.source = 'http://www.w3schools.com/tags/movie.mp4';
			ctrl.start = 4;
			ctrl.end = 10;
			ctrl.showVideo = true;
			
			if(!$scope.clips || $scope.clips.length == 0){
				var video = {
			    		src: trustSrc(this.source + '#t='+this.start+',' + this.end),
			    		title: 'Original',
			    		start: 4,
			    		end: 10,
			    }
			    $scope.clips.push(video);
			}
		    console.log('clips',$scope.clips);
		    ctrl.addClip = function(src, start, end, title){
		    	var video = {
			    		src: trustSrc(this.source + '#t='+start+',' + end),
			    		title: title,
			    		start: start,
			    		end: end,
			    }
		        $scope.clips.push(video);
		    }
		    ctrl.getTrustedSrc = function(src){
		    	console.log('src', src);
		    	return trustSrc(src);
		    	
		    }
		    function trustSrc(src) {
		        return $sce.trustAsResourceUrl(src);
		    }
		    
		    ctrl.playVideo = function(video){
		    	$scope.start = video.start;
		    	$scope.reload();
		    	$scope.selectedVideo = video;
		    }
		    
		    ctrl.change = function(d){
		    	ctrl.showVideo = false;
		    	console.log('d', d);
		    	ctrl.showVideo = true;
		    }
		},
		link: function(scope, element, attrs, ctrl, transclude){
			scope.$watch('clips', updatePlayer);
			
			function updatePlayer(){
				scope.selectedVideo = null;
				var el = $(element);
				scope.player = el.find("video")[0];
				//scope.player.empty();
				if(scope.player){
					scope.player.height = scope.player.height;
					//scope.player.paused = false;
					scope.player.currentTime = scope.start;
					console.log('el', el[0]);
					console.log('video', scope.player);
				}
				
			}
			scope.reload = updatePlayer;
		}
	}
}
export default VideoEditor;