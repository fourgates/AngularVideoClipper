import angular from 'angular';

var module = angular.module('app.video', []);

//components
import videoEditorSources from "./sources/video-editor-sources.component";
module.component('videoEditorSources', videoEditorSources);

// directives
import videoEditor from "./editor/video-editor.directive";
module.directive('videoEditor', videoEditor);

import videoEditorClips from "./clips/video-editor-clips.directive";
module.directive('videoEditorClips', videoEditorClips);

// TODO:
//	Priority 1:
//	Priority 2:
//		1. Persist clips in cache
//		2. Repeat clip(s)
//		3. Use thumbnails in source sidebar
//		4. Create a toolbar -- https://codepen.io/markhillard/pen/Hjcwu?editors=1100#0
//			a. Play Prev / Next
//			b. Be able to repeat a track
//		4. Only show pause/ play button during their respectful state