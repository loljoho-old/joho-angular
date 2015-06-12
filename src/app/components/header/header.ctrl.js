(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header() {
    var self = this;

    this.tabs = [
      { label: 'About',     icon: 'profile'},
      { label: 'Projects',  icon: 'work'},
      { label: 'Contact',   icon: 'phone'}
    ];
  }


})();