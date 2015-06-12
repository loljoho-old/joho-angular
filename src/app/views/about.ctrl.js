(function() {
'use strict';

angular.module('johoApp')
  .controller('About', About);

/* @ngInject */
function About() {
  var self = this;

  this.title = '';
}

})();