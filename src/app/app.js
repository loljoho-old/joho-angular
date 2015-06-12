'use strict';

angular.module('johoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'Main',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('deep-orange')
      .warnPalette('purple');
  })
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .icon('profile',  'assets/icons/md/face.svg')
      .icon('code',     'assets/icons/md/code.svg')
      .icon('phone',    'assets/icons/md/phone.svg')
      .icon('work',     'assets/icons/md/work.svg');

  });