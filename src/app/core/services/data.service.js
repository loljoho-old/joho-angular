(function() {
'use strict';

angular.module('johoApp.core')
  .factory('dataService', dataService);

/* @ngInject */
function dataService($resource) {
  var service = $resource('api/:section.json', 
    { section: 'test' }, 
    {
      getTestSection: { 
        method: 'GET' 
      }
  });

  return service;
  /*
  //var service = $resource();
  var allData = {};
  // Promise-based API
  return {
    loadAllData : function() {
      // Simulate async nature of real remote calls
      return $q.when(allData);
    }
  };*/
}
})();
