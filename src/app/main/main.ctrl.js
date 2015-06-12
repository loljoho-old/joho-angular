(function() {
'use strict';

angular.module('johoApp')
  .controller('Main', Main);

  /* @ngInject */
  function Main($mdSidenav) {
    var self = this;

    self.toggleSidebar = toggleSidebar;

    function toggleSidebar() {
      $mdSidenav('left').toggle();
    }

  }
})();
