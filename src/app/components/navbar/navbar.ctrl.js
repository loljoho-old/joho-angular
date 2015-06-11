(function() {
'use strict';

angular.module('johoApp')
  .controller('Navbar', Navbar);

  /* @ngInjecct */
  function Navbar() {
    var self = this;

    self.header     = 'Jonathan Ho';
    self.subheader  = 'Web Developer · New York NY';    
    self.contacts   = [
      { icon: 'assets/icons/phone.svg',   alt: 'Phone',   text: '1-929-400-7843' },
      { icon: 'assets/icons/mobile.svg',  alt: 'Mobile',  text: '1-908-938-7843' },
      { icon: 'assets/icons/github.svg',  alt: 'GitHub',  text: 'http://github.com/loljoho' }
    ];

    /*
    self.isOpen     = isOpen;
    self.toggle     = toggle;
    function isOpen() {
      return !!self.isOpen;
    }
    function toggle() {
        return $q.when(self.isOpen);
    }
    */

  }

})();