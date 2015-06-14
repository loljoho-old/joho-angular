(function() {
'use strict';

angular.module('johoApp')
  .controller('Navbar', Navbar);


  /* @ngInject */
  function Navbar() {
    var self = this;

    self.header     = 'Jonathan Ho';
    self.subheader  = 'Web Developer · New York NY';    
  

  }

})();