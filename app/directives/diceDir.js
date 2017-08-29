angular.module('app').directive('diceDir', function(){
    return {
        restrict: 'E',
        templateUrl: './app/directives/dice.html',
        scope: {
            num: '='
        }
    }
});