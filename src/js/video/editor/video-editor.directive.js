function VideoEditor($sce, $timeout){
	'ngInject';
	return{
		scope: {
			video: '=',
			close: '=',
			formState: '='
		},
		templateUrl: 'video/editor/video-editor.html',
		controllerAs: '$ctrl',
		controller: function($scope){
			'ngInject';
			var ctrl = this;
			ctrl.init = function(){
				$scope.clips = $scope.video.clips;
				$scope.source = $scope.video.source;
				// if there are no clips add the first (original) clip
				if(!$scope.clips || $scope.clips.length == 0){
					var video = {
			    		src: $scope.source,
			    		title: 'Full Video'
				    }
				    $scope.clips.push(video);
					$scope.selectedVideo = video;
				}
			}
			
			// function used to validate a clip
			function validClip(video, index){
				if((!video.start || ! video.end) && index > 0){
					alert('Please enter a start and end point');
					return false;
				}
				if(video.start && video.end){
					if(video.start > video.end){
						alert('Start point cannot be further than end point');
						return false;
					}
				}
				return true;
			}
		    // function used to be able to stream via a url
		    ctrl.trustSrc = function(src) {
		        return $sce.trustAsResourceUrl(src);
		    }
		    // function called when a user wants to play a clip
		    ctrl.playVideo = function(clip, index){
		    	if(validClip(clip, index)){
		    		$scope.selectedVideo = clip;
		    		//clip.src = clip.src + '#t='+clip.start+',' + clip.end,
		    		
		    		$timeout(function(){
		    			$scope.reload(clip.start, clip.end);
		    		}, 500)
		    	}
		    }
		    
		    // function caled when a user wants to delete a clip
		    ctrl.deleteVideo = function(clip){
		    	if(clip){
		    		var index = $scope.clips.indexOf(clip);
		    		if(index > -1){
		    			$scope.clips.splice(index, 1);
		    		}
		    	}
		    }
		    
		    // function called when user clicks the pause buttons
		    ctrl.pauseVideo = function(video){
		    	$scope.pauseVideo(video);
		    };
		    ctrl.init();
		},
		link: function(scope, element, attrs, ctrl, transclude){
			function updatePlayer(start, end){
				var el = $(element);
				scope.player = el.find("video")[0];
				
				if(scope.player){
					scope.player.height = scope.player.height;
					if(start && start > 0){
						scope.player.currentTime = start;
					}
					else{
						scope.player.currentTime = 0;
					}
					scope.player.play();
					scope.player.addEventListener("timeupdate",autoPauseVideo);
				}
			}
			// function fires when the current video has reached its end
			function autoPauseVideo(event) {
				if(scope.selectedVideo.end){
					if(this.currentTime > scope.selectedVideo.end){
						pauseVideo();
					}
				}
			}
			
			// function fires when a use clicks pause
			function pauseVideo(video){
				var el = $(element);
				scope.player = el.find("video")[0];
				if(scope.player){
					scope.player.height = scope.player.height;
					scope.player.pause();
				}
			}
			// link interface
			scope.reload = updatePlayer;
			scope.pauseVideo = pauseVideo;
		}
	}
}
export default VideoEditor;