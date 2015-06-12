(function() {
'use strict';

angular.module('johoApp')
  .controller('Footer', Footer);

  /* @ngInject */
  function Footer() {
    var self = this;

    this.items = [
      { label: 'GitHub',    icon: 'github'    },
      { label: 'CodePen',   icon: 'codepen'   },
      { label: 'LinkedIn',  icon: 'linkedin'  },
      { label: 'AngelList', icon: 'angellist' },
    ];

  }


})();