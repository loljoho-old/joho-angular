(function() {
'use strict';
  
angular.module('johoApp.layout')
  .controller('ResumeCtrl', ResumeCtrl);

/* @ngInject */
function ResumeCtrl(dataService, $log) {
  var self = this;

  self.resume = setResume();

  function setResume() {
    self.resume = dataService.get().$promise
      .then(function(response) {
        $log.info('dataService responded with ' + response);
        self.resume = response;
      }, function(errorMsg) {
        $log.warn('dataService responded with ' + errorMsg);
        self.resume = errorMsg;
      });
    return self.resume;
  }

}

})();