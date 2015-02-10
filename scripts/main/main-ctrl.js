'use strict';

angular.module('famousAngularStarter')
.controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var Timer = $famous['famous/utilities/Timer'];
    
    $scope.spinner = {
        speed: 55
    };
    $scope.rotateY = new Transitionable(0);
    $scope.rotateText = new Transitionable(0);
    $scope.myGridLayoutOptions = {
       dimensions: [1, 2]
    };
    $scope.animateText = function() {
        $scope.rotateText.set(2 * Math.PI, {
          duration: 1000,
          curve: 'easeInOut'
        });
  	};
    
    //run function on every tick of the Famo.us engine
    Timer.every(function(){
        var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
        $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

});
