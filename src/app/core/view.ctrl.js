(function() {
'use strict';

angular.module('johoApp.core')
  .controller('View', View);

/* @ngInject */
function View() {
  var vm = this;

  // Window Title
  //vm.title = 'Jonathan Ho · Web Developer · New York NY';
  vm.title = 'Dr. Leo Spaceman, M.D. · New York NY';
}
})();
