(function() {
'use strict';

angular.module('johoApp')
  .controller('Header', Header);

  /* @ngInject */
  function Header($location, $log) {
    var self = this;

    self.selectedTab = 0;

    self.tabs = [
      { title: 'Home',      icon: 'home'    },
      { title: 'About',     icon: 'face'    },
      { title: 'Study',     icon: 'school'  },
      { title: 'Work',      icon: 'code'    },
      { title: 'Contact',   icon: 'mail'    }
    ];
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
            }

    self.$watch('selectedTab', function(current, previous) {
      switch(current) {
        case 0:
          $location.url("");
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
      }
    })*/
  }


})();