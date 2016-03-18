var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://hackburgdemo.firebaseio.com/");

  // download the data into a local object
  var syncObject = $firebaseObject(ref.child("leds"));

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "leds");

  $scope.toggleLED = function() {
    console.log($scope.leds.led0);
    if ($scope.leds.led0 === "on") {
        $scope.leds.led0 = "off";
    } else {
        $scope.leds.led0 = "on";
    }
  };
});
