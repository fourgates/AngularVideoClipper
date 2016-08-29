function VideoEditorClips(){
	'ngInject';
	return{
		scope: {
			clips: '=',
			source: '='
		},
		templateUrl: 'video/clips/video-editor-clips.html',
		require: '^^videoEditor',
		controllerAs: '$ctrl',
		controller: function($scope){
			'ngInject';
			console.log('controller init');
		},
		link: function(scope, element, attrs, VideoEditor, transclude){
			console.log('link init', VideoEditor);
			scope.playVideo = VideoEditor.playVideo;
			scope.deleteVideo = VideoEditor.deleteVideo;
		}
	}
}
export default VideoEditorClips;