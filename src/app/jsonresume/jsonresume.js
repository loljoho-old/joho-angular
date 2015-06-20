(function() {
'use strict';

angular.module('johoApp.jsonresume', [])
  .controller('MainCtrl', MainCtrl);

/* @ngInject */
function MainCtrl(dataService, $mdSidenav, $log) {
  var self = this;

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
}

})();