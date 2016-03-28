`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    vm.data = data;
    var num = Math.floor(Math.random() * data.length);
    vm.compliment = (data[num]);
  }

}());
