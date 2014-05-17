var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ng.picturefill',
    'postController',
    'postServices'
]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
      
      $routeProvider.
      when('/', {
          templateUrl: 'Partials/home-posts.html',
          controller: 'PostListCtrl'
      }).
      when('/post/:postUrl', {
        templateUrl: 'Partials/post.html',
        controller: 'PostDetailsCtrl'
      }).
      otherwise({
          templateUrl: 'Partials/404.html'
      });

}]);
