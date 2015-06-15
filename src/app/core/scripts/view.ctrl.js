(function() {
'use strict';

angular.module('johoApp')
  .controller('View', View);

  /* @ngInject */
  function View($mdSidenav) {
    var self = this;

    self.openSidenav    = openSidenav;
    self.closeSidenav   = closeSidenav;
    self.toggleSidenav  = toggleSidenav;

    self.sites = [
      { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
      { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
      { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
      { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }
    ];


    function openSidenav() {
      $mdSidenav('right').open();
    }
    function closeSidenav() {
      $mdSidenav('right').close();
    }
    function toggleSidenav() {
      $mdSidenav('right').toggle();
    }
  }
})();
