
/*app.controller("ChatController",['$scope','ChatService',function($scope, ChatService) {*/
angular.module('chatApp.controllers').controller("ChatController", function($scope, ChatService) {
$scope.messages = [];
  $scope.message = "";
  $scope.max = 140;

  $scope.addMessage = function() {
    ChatService.send($scope.message);
    $scope.message = "";
    console.log('msg is:', $scope.message);
  };

  ChatService.receive().then(null, null, function(message) {
    $scope.messages.push(message);
    var a=$scope.messages.length;
    console.log("no of mess"+a)
  });
});