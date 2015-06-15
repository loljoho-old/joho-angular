(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header($location, $log) {
    var self = this;

    self.onTabSelect = onTabSelect;

    self.selectedTab = 0;
    self.previousTab = self.selectedTab;

    self.tabs = [
      { title: 'Home',    icon: 'home',   state: 'home'   },
      { title: 'Life',    icon: 'face',   state: 'life'   },
      { title: 'Code',    icon: 'code',   state: 'code'   }
    ];

    function onTabSelect(state) {
      $log.info('Previous Tab: ' + self.previousTab);
      $log.info('Selected Tab: ' + self.selectedTab);
      $location.url('/' + state);
      self.previousTab = self.selectedTab;
    }
  }


})();