(function() {
'use strict';

angular.module('johoApp')
  .controller('Footer', Footer);

  /* @ngInject */
  function Footer($mdBottomSheet) {
    var self = this;

    self.items = [
      { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
      { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
      { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
      { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }
    ];

    self.listItemClick = listItemClick;

    function listItemClick($index) {
      self.clickedItem = items[$index];
      $mdBottomSheet.hide(self.clickedItem);
    }

  }


})();