(function() {
'use strict';

angular.module('johoApp')
  .controller('Expertise', Expertise);

  /* @ngInject */
  function Expertise() {
    var self = this;

    // Areas of Expertise
    self.areas = [];

    function activate() {
      self.areas = [{
        name: 'HTML5/CSS3/JS',
        icon: 'dhtml',
        rank: 100
      }, {
        name: 'jQuery/Ajax/JSON/HTTP',
        icon: 'ajax',
        rank: 100
      }, {
        name: 'AngularJS',
        icon: 'angular',
        rank: 98
      }, {
        name: 'Node.js/npm',
        icon: 'node',
        rank: 93
      }, {
        name: 'Apache-MySQL-PHP',
        icon: 'amp',
        rank: 91
      }, {
        name: 'Bower',
        icon: 'bower',
        rank: 90
      }, {
        name: 'Responsive Design',
        icon: 'rwd',
        rank: 89
      }, {
        name: 'Amazon Web Services',
        icon: 'aws',
        rank: 86
      }, {
        name: 'Gulp/Grunt',
        icon: 'gulp',
        rank: 85
      }, {
        name: 'Sass/Scss',
        icon: 'sass',
        rank: 84
      }, {
        name: 'Git',
        icon: 'git',
        rank: 80
      }, {
        name: 'Express.js',
        icon: 'express',
        rank: 78
      }, {
        name: 'MongoDB',
        icon: 'mongo',
        rank: 72
      }, {
        name: 'Python',
        icon: 'python',
        rank: 65
      }, {
        name: 'C/C++/C#, Java',
        icon: 'oop',
        rank: 60
      }];
      return self.areas;
    }


  }


})();