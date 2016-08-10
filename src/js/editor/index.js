import angular from 'angular'

// define module
let editorModule = angular.module('app.editor', [])

// import config
import EditorConfig from './editor.config'
editorModule.config(EditorConfig);

// controller
import EditorCtrl from './editor.controller'
editorModule.controller('EditorCtrl', EditorCtrl);

export default editorModule;