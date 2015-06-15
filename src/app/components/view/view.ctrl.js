(function() {
'use strict';

angular.module('johoApp')
  .controller('View', View);

  /* @ngInject */
  function View($mdSidenav, $timeout, $mdBottomSheet) {
    var self = this;

    self.openSidenav    = openSidenav;
    self.closeSidenav   = toggleSidenav;
    self.toggleSidenav  = toggleSidenav;

    self.sites = [
      { label: 'GitHub',    icon: 'github',     url: 'http://github.com/loljoho/'     },
      { label: 'CodePen',   icon: 'codepen',    url: 'http://codepen.io/loljoho/'     },
      { label: 'LinkedIn',  icon: 'linkedin',   url: 'http://linkedin.com/in/loljoho' },
      { label: 'AngelList', icon: 'angellist',  url: 'http://angel.co/loljoho'        }
    ];


    function openSidenav() {
      $mdSidenav('right').open();
    }
    function closeSidenav() {
      $mdSidenav('right').close();
    }
    function toggleSidenav() {
      $mdSidenav('right').toggle();
    }
/*
    self.showFooterSheet    = showFooterSheet;

    self.openSidebarLeft    = openSidebarLeft;
    self.closeSidebarLeft   = closeSidebarLeft;
    self.toggleSidebarLeft  = toggleSidebarLeft;
    

    function showFooterSheet($event) {
      $mdBottomSheet.show({
        templateUrl:        'app/components/footer/footer-sheet.html',
        controller:         'Footer',
        controllerAs:       'fm',
        targetEvent:        '$event',
        disableParentScroll: false
      }).then(function(clickedItem) {
        $log.alert('Clicked on: ' + clickedItem);
      });
    }


    function openSidebarLeft() {
      $mdSidenav('left').open();
    }
    function closeSidebarLeft() {
      $mdSidenav('left').close();
    }
    function toggleSidebarLeft() {
      $mdSidenav('left').toggle();
    }
*/
  }
})();
