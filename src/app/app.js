'use strict';

angular.module('johoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])

/**
 * @ngdoc   config
 * @module  johoApp
 *
 * @description
 * Application route configuration
 */
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      views: {
        'content': {
          url: '/home',
          templateUrl: 'app/content/about/about.html',
          controller: 'About',
          controllerAs: 'ctrl'
        }
      }
    })
    .state('about', {
      views: {
        'content': {
          url: '/life',
          templateUrl: 'app/components/header/about.html'
        }
      }
    })
    .state('code', {
      views: {
        'content': {
          url: '/code',
          templateUrl: 'app/components/header/code.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/home');
})

/**
 * @ngdoc   config
 * @module  johoApp
 *
 * @description
 * Configure ngMaterial Theme
 */
.config(function ($mdThemingProvider) {
  /*
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
  $mdThemingProvider
    .definePalette('gpRed',  gpRedMap)
    .definePalette('gpGrey', gpGreyMap);
  */
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red')
    .warnPalette('purple');
})

/**
 * @ngdoc   config
 * @module  johoApp
 *
 * @description
 * Configure ngMaterial Icons
 */
.config(function ($mdIconProvider) {
  $mdIconProvider

    // Menu Icons
    .icon('face',       'assets/icons/md/face.svg'    )
    .icon('code',       'assets/icons/md/code.svg'    )
    .icon('school',     'assets/icons/md/school.svg'  )
    .icon('phone',      'assets/icons/md/phone.svg'   )
    .icon('work',       'assets/icons/md/work.svg'    )
    .icon('home',       'assets/icons/md/home.svg'    )
    .icon('mail',       'assets/icons/md/mail.svg'    )

    // Navigation Icons
    .icon('menu-vert',  'assets/icons/md/menu-vert.svg')
    .icon('menu-hori',  'assets/icons/md/menu-hori.svg')
    .icon('menu-bars',  'assets/icons/md/menu-bars.svg')
    .icon('menu-grid',  'assets/icons/md/menu-grid.svg')

    // Directional Icons
    .icon('arrow-left',     'assets/icons/md/arrow-left.svg'    )
    .icon('arrow-right',    'assets/icons/md/arrow-right.svg'   )
    .icon('chevron-left',   'assets/icons/md/chevron-left.svg'  )
    .icon('chevron-right',  'assets/icons/md/chevron-right.svg' )

    // Profile/Social Media
    .icon('github',     'assets/icons/fa/github.svg'    )
    .icon('linkedin',   'assets/icons/fa/linkedin.svg'  )
    .icon('codepen',    'assets/icons/fa/codepen.svg'   )
    .icon('angellist',  'assets/icons/fa/angellist.svg' );

});