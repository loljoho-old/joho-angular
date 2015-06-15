(function() {
'use strict';

angular.module('johoApp')
  .factory('dataService', dataService);

/* @ngInject */
function dataService($resource, $q) {
  //var service = $resource();
  var allData = {};
  // Promise-based API
  return {
    loadAllData : function() {
      // Simulate async nature of real remote calls
      return $q.when(allData);
    }
  };
}
})();
