import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service'
servicesModule.service('Profile', ProfileService);

import ArticleService from './articles.service';
servicesModule.service('Article', ArticleService);

export default servicesModule;