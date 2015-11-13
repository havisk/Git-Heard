let config = function(
  $stateProvider,
  $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.signUp', {
      url: '/signUp',
      controller: "SignupController",
      templateUrl: 'templates/signUp.tpl.html'
    })
    .state('root.genre', {
      url: '/genre',
      templateUrl: 'templates/genre.tpl.html'
    })
    .state('root.login',{
      url: '/login',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.dashboard',{
      url: '/dashboard',
      templateUrl: 'templates/dashboard.tpl.html'
    })
    .state('root.profile', {
      url: '/profile',
      templateUrl: 'templates/profile.tpl.html'
    })


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;