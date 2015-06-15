(function() {
'use strict';

angular.module('johoApp')
  .controller('View', View);

  /* @ngInject */
  function View($mdSidenav) {
    var self = this;

    self.openSidebarLeft    = openSidebarLeft;
    self.closeSidebarLeft   = closeSidebarLeft;
    self.toggleSidebarLeft  = toggleSidebarLeft;
    
    function openSidebarLeft() {
      $mdSidenav('left').open();
    }
    function closeSidebarLeft() {
      $mdSidenav('left').close();
    }
    function toggleSidebarLeft() {
      $mdSidenav('left').toggle();
    }

  }
})();
