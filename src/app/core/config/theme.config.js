(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureTheme);

/* @ngInject */
function configureTheme($mdThemingProvider) {
  var gpRedMap = $mdThemingProvider.extendPalette('red', {
    '500':  'e90000',
    '300':  'fc0f00',
    '800':  'c90000',
    'A100': 'ff0000',
    'contrastDefaultColor': 'light'
  });
  var gpGreyMap = $mdThemingProvider.extendPalette('grey', {
    '500':  '333333', 
    '300':  'e6e6e6',   
    '800':  '444444',   
    'A100': 'f0f0f0',
    'contrastDefaultColor': 'dark',
    'contrastLightColors'  : ['800', 'A100']
  });
  $mdThemingProvider
    .definePalette('gpRed',  gpRedMap)
    .definePalette('gpGrey', gpGreyMap);
  
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red')
    .warnPalette('deep-orange');
}

})();
