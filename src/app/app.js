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
    // Extend Existing Themes
    //
    // Primary/Warn Hues: 500, 300, 800, A100
    // Accent Hues:       400, 300, 800, A100
    var gpRedMap = $mdThemingProvider.extendPalette('red', {
      '500':  'e90000',
      '300':  'fc0f00',
      '800':  'c90000',
      'A100': 'ff0000',
      'contrastDefaultColor': 'light'
    });
    var gpGreyMap = $mdThemingProvider.extendPalette('grey', {
      '500':  '333333', 
      '300':  'e8e8e8',   
      '800':  '343434',   
      'A100': '00ff00',
      'contrastDefaultColor': 'dark',
      'contrastDarkColors'  : ['500', '300']
    });

    // Register New Colour Palette Maps
    $mdThemingProvider
      .definePalette('gpRed',  gpRedMap)
      .definePalette('gpGrey', gpGreyMap);

    // Set Themes
    $mdThemingProvider.theme('default')
      .primaryPalette('gpGrey')
      .accentPalette('gpRed')
      .warnPalette('purple');
  })
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .icon('profile',  'assets/icons/md/face.svg')
      .icon('code',     'assets/icons/md/code.svg')
      .icon('phone',    'assets/icons/md/phone.svg')
      .icon('work',     'assets/icons/md/work.svg')
      .icon('morev',    'assets/icons/md/morev.svg')
      .icon('moreh',    'assets/icons/md/moreh.svg')
      .icon('menu',     'assets/icons/md/menu.svg')
      .icon('github',   'assets/icons/fa/github.svg')
      .icon('linkedin', 'assets/icons/fa/linkedin.svg')
      .icon('codepen',  'assets/icons/fa/codepen.svg')
      .icon('angellist','assets/icons/fa/angellist.svg');

  });