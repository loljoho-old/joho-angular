(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureRoutes);

/* @ngInject */
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider    
    .state('resume', {
      url: '/resume',
      templateUrl: 'app/resume/resume.html',
      controller: 'ResumeCtrl',
      controllerAs: 'sm'
    })
    .state('jsonresume', {
      url: '/jsonresume',
      templateUrl: 'app/jsonresume/jsonresume.html',
      controller: 'MainCtrl',
      controllerAs: 'sm'
    });
  $urlRouterProvider.otherwise('/jsonresume');
}

})();
