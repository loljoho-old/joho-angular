(function() {
'use strict';

angular.module('johoApp.core')
  .controller('View', View);

/* @ngInject */
function View(dataService, $mdSidenav, $log) {
  var self = this;

  self.title = setTitle();

  self.toggleSidenav = toggleSidenav;

  function setTitle() {
    //self.title = dataService.get().$promise
    self.title = dataService.getJsonResume().$promise
      .then(function(response) {
        self.title = response.basics.name + ' · Web Developer · New York NY';
      }, function(errorMsg) {
        $log.error('Error in fetching page title: ' + errorMsg);
        self.title = 'Material CV';
      });
    return self.title;
  }

  self.resume = setResume();

  function setResume() {
    self.resume = dataService.getJsonResume().$promise
      .then(function(response) {
        self.resume = response;
      }, function(errorMsg) {
        $log.warn('dataService responded with ' + errorMsg);
        self.resume = errorMsg;
      });
    return self.resume;
  }

  function toggleSidenav() {
    $mdSidenav('right').toggle();
  }
}
})();
