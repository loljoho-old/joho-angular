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

    this.profiles = [
      { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
      { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
      { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
      { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }

    ];
  }


})();