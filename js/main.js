import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import SignUpController from './controllers/signUp';
import HomeController from './controllers/home';
import ProfileController from './controllers/profile';

import UserService from './services/user';



angular
.module('app', ['ui.router'])
.constant('PARSE',{
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers:{
      'X-Parse-Application-Id': 'KZubsuaEP5mWngRddElnioU22ok9OskFZazZsHeu',
      'X-Parse-REST-API-Key': 'lHBHuvBoNoPpDNxNgHg5Akjey5zLNJswmL7wgAI8'
    }
  }
})
.config(config)
.controller('HomeController', HomeController)
.controller('SignUpController', SignUpController)
.controller('ProfileController', ProfileController)
.service('UserService', UserService)
;