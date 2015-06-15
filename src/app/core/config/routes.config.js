(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureRoutes);

/* @ngInject */
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      views: {
        'content': {
          url: '/home',
          templateUrl: 'app/content/home/index.html',
          controller: 'Home',
          controllerAs: 'ctrl'
        }
      }
    })
    .state('about', {
      views: {
        'content': {
          url: '/about',
          templateUrl: 'app/content/about/index.html',
          controller: 'About',
          controllerAs: 'ctrl'
        }
      }
    })
    .state('work', {
      views: {
        'content': {
          url: '/work',
          templateUrl: 'app/content/work/index.html',
          controller: 'Work',
          controllerAs: 'ctrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/home');
}

})();
