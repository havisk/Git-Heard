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
    .state('root.addsong', {
      url: '/addsong',
      controller: 'AddSongController',
      templateUrl: 'templates/addSong.tpl.html'
    })
    .state('root.single', {
      url: '/single',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.hiphop', {
      url: '/hiphop',
      controller: 'HipHopController',
      templateUrl: 'templates/hiphop.tpl.html'
    })
    .state('root.pop', {
      url: '/pop',
      controller: 'PopController',
      templateUrl: 'templates/pop.tpl.html'
    })
    .state('root.rock', {
      url: '/rock',
      controller: 'RockController',
      templateUrl: 'templates/Rock.tpl.html'
    })
    .state('root.rnb', {
      url: '/rnb',
      controller: 'RNBController',
      templateUrl: 'templates/rnb.tpl.html'
    })



};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;