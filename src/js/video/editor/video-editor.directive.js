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
			    		title: 'Original'
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
			// function called when a user manually add a clip
		    ctrl.addClip = function(src, start, end, title){
		    	var video = {
			    		src: $scope.source + '#t='+start+',' + end,
			    		title: title,
			    		start: start,
			    		end: end,
			    }
		    	if(validClip(video)){
		    		$scope.clips.push(video);
		    		$scope.start = null;
					$scope.end = null;
					$scope.title = null;
		    	}
		    }
		    
		    // function used to be able to stream via a url
		    ctrl.trustSrc = function(src) {
		        return $sce.trustAsResourceUrl(src);
		    }
		    
		    // function called when a user wants to play a clip
		    ctrl.playVideo = function(clip, index){
		    	if(validClip(clip, index)){
		    		$scope.reload(clip.start, clip.end);
			    	$scope.selectedVideo = clip;
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
		    
		    ctrl.pauseVideo = function(video){
		    	$scope.pauseVideo(video);
		    };
		    ctrl.init();
		},
		link: function(scope, element, attrs, ctrl, transclude){
			// update player if a clips is added / deleted 
			// or the source changes
			
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
				}
			}
			
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