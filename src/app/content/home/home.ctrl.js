(function() {
'use strict';

angular.module('johoApp')
  .controller('Home', Home);

/* @ngInject */
function Home() {
  var self = this;

  // Resume Download Links
  self.links = [{
    text: 'Google Drive',
    icon: 'assets/images/logos/drive_icon_48px.png',
    link: 'https://drive.google.com/folderview?id=0B9VAfEqSVO-MfnRweHFQT1dfNHRtaFpkM0J3ZW15b2FBbnhJQVJ4ZEc5OWpSRHEzSl92ZWM&usp=sharing'
  }, {
    text: 'Dropbox',
    icon: 'assets/images/logos/dropbox_icon_48px.png',
    link: 'https://www.dropbox.com/sh/nr5z44oom47pkfm/AACxoIgNtW_q0nHIOrcPZTb_a?dl=0'
  }, {
    text: 'Microsoft OneDrive',
    icon: 'assets/images/logos/onedrive_icon_48px.png',
    link: 'http://1drv.ms/1dGkysf'
  }];
  
  

  // Areas of Expertise
  self.areas = [{
    text: 'HTML5/CSS3/JS',
    icon: 'assets/images/thumbs/dhtml.png',
    rank: 100
  }, {
    text: 'AngularJS',
    icon: 'assets/images/thumbs/angular.png',
    rank: 98
  }, {
    text: 'jQuery, Ajax',
    icon: 'assets/images/thumbs/jquery.png',
    rank: 96
  }, {
    text: 'Node.js/npm',
    icon: 'assets/images/thumbs/node.png',
    rank: 93
  }, {
    text: 'Apache-MySQL-PHP',
    icon: 'assets/images/thumbs/amp.png',
    rank: 91
  }, {
    text: 'Bower',
    icon: 'assets/images/thumbs/bower.png',
    rank: 90
  }, {
    text: 'Responsive Design',
    icon: 'assets/images/thumbs/rwd.png',
    rank: 85
  }, {
    text: 'Git',
    icon: 'assets/images/thumbs/git.png',
    rank: 83
  }, {
    text: 'Amazon Web Services',
    icon: 'assets/images/thumbs/aws.png',
    rank: 82
  }, {
    text: 'Gulp/Grunt',
    icon: 'assets/images/thumbs/gulp.png',
    rank: 80
  }, {
    text: 'Sass/Scss',
    icon: 'assets/images/thumbs/sass.png',
    rank: 80
  }, {
    text: 'Data Structures',
    icon: 'assets/images/thumbs/data.png',
    rank: 76
  }, {
    text: 'Laravel/Lumen',
    icon: 'assets/images/thumbs/laravel.png',
    rank: 70
  }, {
    text: 'Python',
    icon: 'assets/images/thumbs/python.png',
    rank: 62
  }, {
    text: 'Java, C/C++/C#',
    icon: 'assets/images/thumbs/java.png',
    rank: 60
  }];


}

})();