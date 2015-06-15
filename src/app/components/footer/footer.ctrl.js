(function() {
'use strict';

angular.module('johoApp')
  .controller('Footer', Footer);

  /* @ngInject */
  function Footer() {
    var self = this;

    this.items = [
      { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
      { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
      { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
      { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }
    ];

  }


})();