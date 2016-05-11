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
          .filter('reverse', function(){
          
          return function(text){
            return text.split('').reverse().join('');
          }

          })
          .service("articles", function($http){

           	var o =  this;
          
           o.getall = function(){
           return  $http.get('/articles.json');
              };

           o.add = function(post){
           return $http.post('/articles.json', post)
           };  

           o.show =  function(article){
            return $http.get('/articles/' + article + '.json');

           };

           o.deletethis= function(del){
            return $http.delete('/articles/' + del + '.json');
           };
           })
          .service('Data', [function () {

            return {message: "You are a awesome"}
          }])
          .controller('FirstCtrl', function($scope, articles){

            var first = this;

            first.message = "sdfs";
            articles.getall().then(function(response){
            console.log(response.data);
             first.data = response.data;
           });


           first.showme =  function(id){
            articles.show(id.id).then(function(response){
              console.log(response.data);

            });
          };
            first.deleteme =  function(id){
            articles.deletethis(id.id).then(function(){
              console.log("deleted");
               });

               var index = first.data.indexOf(id);
               first.data.splice(index,1);

              };
           first.create = function(title, description){
              if (!title || !description) { return ;}

              articles.add({
                title: title,
                description: description
              });
              first.data.push({
                title: title,
                description: description
              });

              first.title="";
              first.description ="";


            };

          })
          .controller('SecondCtrl', function($scope, greeting){

            var second = this;
            second.greeting = greeting;
          });
    

    