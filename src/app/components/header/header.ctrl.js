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
      { title: 'About',   icon: 'face',   state: 'about'    },
      { title: 'Study',   icon: 'school', state: 'study'    },
      { title: 'Work',    icon: 'code',   state: 'work'     },
      { title: 'Contact', icon: 'mail',   state: 'contact'  }
    ];

    function onTabSelect(state) {
      $log.info('Previous Tab: ' + self.previousTab);
      $log.info('Selected Tab: ' + self.selectedTab);
      $location.url('/' + state);
      self.previousTab = self.selectedTab;
    }
  }


})();