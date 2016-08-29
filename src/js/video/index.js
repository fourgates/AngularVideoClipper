import angular from 'angular';

var module = angular.module('app.video', []);

//components
import videoEditorSources from "./sources/video-editor-sources.component";
module.component('videoEditorSources', videoEditorSources);

// directives
import videoEditor from "./video-editor.directive";
module.directive('videoEditor', videoEditor);

import videoEditorClips from "./clips/video-editor-clips.directive";
module.directive('videoEditorClips', videoEditorClips);

// TODO:
//	Priority 1:
//		1. Validate clip on edit
//		2. Break directive into components so the video player and playlist can be reused throughout the app
//		3. Pass video object into directive 
//		4. Add 
//	Priority 2:
//		1. Persist clips in cache
//		2. Ability to queue clips
//		3. Repeat clip(s)
//		4. Use thumbnails in source sidebar
//		5. Create a toolbar -- https://codepen.io/markhillard/pen/Hjcwu?editors=1100#0
//			a. Play Prev / Next
//			b. Be able to repeat a track
//		6. Only show pause/ play button during their respectful state
//		7. Swap source and player columns
// FIXME
//		1. undefined:1 Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
//			a. things to be happening out of order. may have something to do with the watches
//		2. Should not be able to edit first clip