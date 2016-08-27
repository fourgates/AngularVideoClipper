import angular from 'angular';

var module = angular.module('app.video', []);

import videoEditor from "./video-editor.directive";
module.directive('videoEditor', videoEditor);

// TODO:
//		1. Add Clip Interface
//			a. Mechanism to create a clip given a Title, Start Time, and End time
//				i. Validation - ensure start is less than end
//				ii. We can get clip length in the link function
//			b. Table of Clips (Play Button, Select Checkbox, Title, Start, End, Delete Button)
//		2. Input link for source video - move to sidebar
//		3. Break directive into components so the video player and playlist can be reused throughout the app
//			a. maybe create an attribute directive?
//		Bonus
//		2. Persist clips in cache
//		6. Ability to queue clips
//		8. Repeat clip(s)