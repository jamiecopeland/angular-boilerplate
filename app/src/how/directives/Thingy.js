angular.module('how').directive('thingy',  
  function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        console.log('Thingy initialized');
      }
    }
  }
);