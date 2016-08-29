function VideoEditorClips(){
	'ngInject';
	return{
		scope: {
			clips: '=',
			source: '=',
			formState: '='
		},
		templateUrl: 'video/clips/video-editor-clips.html',
		require: '^^videoEditor',
		controllerAs: '$ctrl',
		controller: function($scope){
			'ngInject';
			var ctrl = this;
		},
		link: function(scope, element, attrs, VideoEditor, transclude){
			scope.playVideo = VideoEditor.playVideo;
			scope.deleteVideo = VideoEditor.deleteVideo;
		}
	}
}
export default VideoEditorClips;