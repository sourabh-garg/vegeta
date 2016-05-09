var app = angular.module('myapp', ['ui.router', 'templates'])

          .config(function config($stateProvider){
           
           $stateProvider.state("first", {
           	url : "",
           	controller : "FirstCtrl as first",
           	templateUrl: "templates/first.html"
           })

           .state("second", {
           	url : "/second",
           	controller : "SecondCtrl as second",
           	templateUrl : "templates/second.html"
           })

          })
          .directive('elem', function () {
            return {
              restrict: 'E',
              templateUrl: "templates/second.html"
            };
          })
          .filter('reverse', function(){
          
          return function(text){
            return text.split('').reverse().join('');
          }

          })
          .service("greeting", function Greeting(){

           	var greeting =  this;

           	greeting.message = 	"Default";
           })
          .service('Data', [function () {

            return {message: "You are a awesome"}
          }])
          .controller('FirstCtrl', function($scope, greeting, Data){

            var first = this;
            first.greeting = greeting;

            first.data = Data;

            first.reversed = function(message){
              return message.split('').reverse().join('');

            };

          })
          .controller('SecondCtrl', function($scope, greeting){

            var second = this;
            second.greeting = greeting;
          });
    

    