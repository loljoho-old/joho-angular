'use strict';

angular.module('johoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'Main',
      controllerAs: 'mm'
    })
      .state('home.about', {
        url: '/about',
        templateUrl: 'app/components/header/about.html'
      })
      .state('home.study', {
        url: '/study',
        templateUrl: 'app/components/header/study.html'
      })
      .state('home.work', {
        url: '/work',
        templateUrl: 'app/components/header/work.html'
      })
      .state('home.contact', {
        url: '/contact',
        templateUrl: 'app/components/header/contact.html'
      });

  $urlRouterProvider.otherwise('/home');
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
    '300':  'e6e6e6',   
    '800':  '444444',   
    'A100': 'f0f0f0',
    'contrastDefaultColor': 'dark',
    'contrastLightColors'  : ['800', 'A100']
  });

  // Register New Colour Palette Maps
  $mdThemingProvider
    .definePalette('gpRed',  gpRedMap)
    .definePalette('gpGrey', gpGreyMap);

  // Set Themes
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('gpRed')
    .warnPalette('purple');
})
.config(function ($mdIconProvider) {
  $mdIconProvider
    .icon('face',       'assets/icons/md/face.svg'    )
    .icon('code',       'assets/icons/md/code.svg'    )
    .icon('school',     'assets/icons/md/school.svg'  )
    .icon('phone',      'assets/icons/md/phone.svg'   )
    .icon('work',       'assets/icons/md/work.svg'    )
    .icon('home',       'assets/icons/md/home.svg'    )
    .icon('mail',       'assets/icons/md/mail.svg'    )

    // Menu Icons
    .icon('menu-vert',  'assets/icons/md/menu-vert.svg')
    .icon('menu-hori',  'assets/icons/md/menu-hori.svg')
    .icon('menu-bars',  'assets/icons/md/menu-bars.svg')
    .icon('menu-grid',  'assets/icons/md/menu-grid.svg')
    // Directional Icons
    .icon('arrow-left',     'assets/icons/md/arrow-left.svg')
    .icon('arrow-right',    'assets/icons/md/arrow-right.svg')
    .icon('chevron-left',   'assets/icons/md/chevron-left.svg')
    .icon('chevron-right',  'assets/icons/md/chevron-right.svg')

    // Profile/Social Media
    .icon('github',     'assets/icons/fa/github.svg')
    .icon('linkedin',   'assets/icons/fa/linkedin.svg')
    .icon('codepen',    'assets/icons/fa/codepen.svg')
    .icon('angellist',  'assets/icons/fa/angellist.svg');

});