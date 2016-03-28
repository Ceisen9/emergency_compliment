`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("mainController", mainController);

  function mainController(){
    var vm = this;
    vm.data = data;
    var num = Math.floor(Math.random() * data.length);
    console.log(data[num]);
    vm.compliment = data[num];
  }

}());
