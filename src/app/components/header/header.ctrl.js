(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header($location, $log) {
    var self = this;

    self.selectedTab = 0;
    self.onChangeTab = onChangeTab;

    self.tabs = [
      { title: 'About',     icon: 'face',   state: 'about'  },
      { title: 'Study',     icon: 'school', state: 'study'  },
      { title: 'Work',      icon: 'code',   state: 'work'   },
      { title: 'Contact',   icon: 'mail',   state: 'contact'}
    ];

    function onChangeTab(state) {
      $location.url('/home/' + state);
      $log.info('Tab: ' + self.selectedTab + ' ' + $location.templateUrl);
    }
    /*
    self.$watch('selectedTab', function(current, previous) {
      switch(current) {
        case 0:
          $location.url('/about');
          break;
        case 1:
          $location.url('/study');
          break;
        case 2:
          $location.url('/work');
          break;
        case 3:
          $location.url('/contact');
          break;
      }
    });
    */
/*
        $stateProvider
        .state('view1', {
            url: "/view1",
            templateUrl: "partials/view1.html"
        })
        .state('view2', {
            url: "/view2",
            templateUrl: "partials/view2.html"
        })
        .state('view3', {
            url: "/view3",
            templateUrl: "partials/view3.html"
        });
            switch (current) {
                case 0:
                    $location.url("/view1");
                    break;
                case 1:
                    $location.url("/view2");
                    break;
                case 2:
                    $location.url("/view3");
                    break;
            }*/
  }


})();