var postServices = angular.module('postServices', ['ngResource']);
 
postServices.factory('Post', ['$resource',
  function($resource){
    return $resource('Resources/JSON/:postUrl.json', {}, {
        query: {method:'GET', params:{postUrl:'posts'}, isArray:true}
    });
}]);