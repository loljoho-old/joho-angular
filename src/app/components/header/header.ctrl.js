(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header($location, $log) {
    var self = this;

    self.selectedTab = 0;
    self.onChangeTab = onChangeTab;

    self.tabs = [
      { title: 'About',     icon: 'face',   state: 'about'  },
      { title: 'Study',     icon: 'school', state: 'study'  },
      { title: 'Work',      icon: 'code',   state: 'work'   },
      { title: 'Contact',   icon: 'mail',   state: 'contact'}
    ];

    function onChangeTab(state) {
      $location.url('/' + state);
      $log.info('Tab: ' + self.selectedTab + ' ' + $location.templateUrl);
    }
  }


})();