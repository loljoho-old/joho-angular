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
    self.title = dataService.get().$promise
      .then(function(response) {
        self.title = response.basics.name + ' · ' + response.basics.title + ' · ' + response.basics.subtitle;
      }, function(errorMsg) {
        $log.error('Error in fetching page title: ' + errorMsg);
        self.title = 'Material CV';
      });
    return self.title;
  }

  function toggleSidenav() {
    $mdSidenav('right').toggle();
  }
}
})();
