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
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'app/layout/resume/resume.html',
      controller: 'ResumeCtrl',
      controllerAs: 'sm'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: 'app/components/demo.html',
      controller: 'ResumeCtrl',
      controllerAs: 'sm'
    });
  $urlRouterProvider.otherwise('/resume');
}

})();
