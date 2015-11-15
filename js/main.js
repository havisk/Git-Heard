import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import SignUpController from './controllers/signUp';
import HomeController from './controllers/home';
import ProfileController from './controllers/profile';
import AddSongController from './controllers/addSong';
import HipHopController from './controllers/hiphop';
import PopController from './controllers/pop';
import RockController from './controllers/rock';
import RNBController from './controllers/rnb';

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
.controller('AddSongController', AddSongController)
.controller('HipHopController', HipHopController)
.controller('PopController', PopController)
.controller('RockController', RockController)
.controller('RNBController', RNBController)
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])
.service('UserService', UserService)
;