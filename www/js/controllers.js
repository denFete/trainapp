angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('ExerciseCtrl', function($scope) {

   $scope.count = 15;
   var max = $scope.count + 1;
   var min = $scope.count - 1;

  $scope.increment = function() {
    console.log ("lol")
    if ($scope.count >= max) { return; }
    $scope.count++;
  };
  $scope.decrement = function() {
    if ($scope.count <= min) { return; }
    $scope.count--;
  };
})


.controller('BrowseCtrl', function($scope) {

  $scope.workoutslist = { 
    "1": {
        'workoutName': "Bröst",  
        'exercises': [   
            {exerciseId: 1, exerciseName: "Snebänk"},  
            {exerciseId: 2, exerciseName: "Armhävningar"}  
        ]  
    },  
    "2": {
        'workoutName': "Ben",  
        'exercises': [ 
            {exerciseId: 3, exerciseName: "exercise3"},  
            {exerciseId: 4, exerciseName: "exercise4"}  
        ]
    }
  };

  $scope.loadExercises = function(exercises){
      console.log (exercises);    
  };

});


