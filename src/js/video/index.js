import angular from 'angular';

var module = angular.module('app.video', []);

import videoEditor from "./video-editor.directive";
module.directive('videoEditor', videoEditor);