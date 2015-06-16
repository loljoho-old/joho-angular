(function() {
'use strict';

angular.module('johoApp')
  .controller('View', View);

/* @ngInject */
function View($mdSidenav, $mdMedia, $q) {
  var self = this;

  self.selectedTab = 0;

  self.lockRightOpen  = lockRightOpen;
  self.lockLeftOpen   = lockLeftOpen;

  self.lockedRight  = true;
  self.lockedLeft   = true;

  self.unlockRight  = unlockRight;
  self.openRight    = openRight;
  self.closeRight   = closeRight;
  self.toggleRight  = toggleRight;

  self.openLeft     = openLeft;
  self.closeLeft    = closeLeft;
  self.toggleLeft   = toggleLeft;

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
    text: 'AngularJS · Node.js · Express.js',
    icon: 'assets/images/thumbs/ean.png',
    rank: 100
  }, {
    text: 'Apache · MySQL · PHP',
    icon: 'assets/images/thumbs/amp.png',
    rank: 89
  }, {
    text: 'Gulp · Grunt · RequireJS',
    icon: 'assets/images/thumbs/build.png',
    rank: 82
  }, {
    text: 'REST API Design & Integration',
    icon: 'assets/images/thumbs/json.png',
    rank: 70
  }, {
    text: 'CSS3, Sass/Scss',
    icon: 'assets/images/thumbs/scss.png',
    rank: 62
  }, {
    text: 'Responsive Web Design',
    icon: 'assets/images/thumbs/rwd.png',
    rank: 54
  }, {
    text: 'Git',
    icon: 'assets/images/thumbs/git.png',
    rank: 49
  }, {
    text: 'Amazon Web Services',
    icon: 'assets/images/thumbs/aws.png',
    rank: 36
  }];

  // Profiles
  self.sites = [
    { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
    { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
    { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
    { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }
  ];

  // Contact Information
  self.contacts = [
    { text: 'Phone', icon: 'phone'      },
    { text: 'Email', icon: 'envelope'   },
    { text: 'Skype', icon: 'skype'      },
    { text: 'Home',  icon: 'map-marker' }
  ];

  // Information Sections
  self.sections = [
  ];

  function unlockRight() {
    self.lockedRight = false;
    $mdSidenav('right').close();
  }
  function openRight() {
    $mdSidenav('right').open();
  }
  function closeRight() {
    $mdSidenav('right').close();
  }
  function toggleRight() {
    $mdSidenav('right').toggle();
  }

  function unlockLeft() {
    self.lockedLeft = false;
    $mdSidenav('left').close();
  }
  function openLeft() {
    $mdSidenav('left').open();
  }
  function closeLeft() {
    $mdSidenav('left').close();
  }
  function toggleLeft() {
    $mdSidenav('left').toggle();
  }
  function lockRightOpen() {
    return $mdMedia('gt-sm') && self.lockedRight ? true : false;
  }
  function lockLeftOpen() {
    return $mdMedia('gt-md') && self.lockedLeft ? true : false;
  }
}
})();
