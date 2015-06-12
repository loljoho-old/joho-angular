(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header() {
    var self = this;

    self.selectedTab = 0;

    this.tabs = [
      { title: 'About',     icon: 'profile' },
      { title: 'Projects',  icon: 'work'    },
      { title: 'Contact',   icon: 'phone'   }
    ];
  }


})();