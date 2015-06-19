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
    });
  $urlRouterProvider.otherwise('/resume');
}

})();
