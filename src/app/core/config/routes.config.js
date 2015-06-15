(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureRoutes);

/* @ngInject */
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider    
    .state('home', {
      url: '/home',
      templateUrl: 'app/portfolio/portfolio.html'
    });
  $urlRouterProvider.otherwise('/home');
}

})();
