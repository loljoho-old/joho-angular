(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header() {
    var self = this;

    self.selectedTab = 0;

    this.tabs = [
      { title: 'Home',      icon: 'home'    },
      { title: 'About',     icon: 'face'    },
      { title: 'Study',     icon: 'school'  },
      { title: 'Work',      icon: 'code'    },
      { title: 'Contact',   icon: 'mail'    }
    ];

  }


})();