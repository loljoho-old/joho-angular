(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureRoutes);

/* @ngInject */
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider    
    .state('home', {
      url: '/home',
      templateUrl: 'app/content/home/home.html',
      controller: 'Home',
      controllerAs: 'ctrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/content/about/about.html',
      controller: 'About',
      controllerAs: 'ctrl'
    })
    .state('work', {
      url: '/work',
      templateUrl: 'app/content/work/work.html',
      controller: 'Work',
      controllerAs: 'ctrl'
    });
/*    
    .state('/home', {
      views: {
        'content': {
          url: '/home',
          templateUrl: 'app/content/home/home.html',
          controller: 'Home',
          controllerAs: 'ctrl'
        }
      }
    })
    .state('/about', {
      views: {
        'content': {
          url: '/about',
          templateUrl: 'app/content/about/about.html',
          controller: 'About',
          controllerAs: 'ctrl'
        }
      }
    })
    .state('/work', {
      views: {
        'content': {
          url: '/work',
          templateUrl: 'app/content/work/work.html',
          controller: 'Work',
          controllerAs: 'ctrl'
        }
      }
    });
*/
  $urlRouterProvider.otherwise('/home');
}

})();
