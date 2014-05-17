var postController = angular.module('postController', []);

postController.controller('PostListCtrl', function($scope, Post) {
    $scope.posts = Post.query();
});

postController.controller('PostDetailsCtrl', function($scope, $routeParams, Post) {
    $scope.post = Post.get({postUrl: $routeParams.postUrl});
    $scope.countOf = function(text) {
        var words = text ? text.split(/\s+/) : 0;
        return words ? words.length : '';
    };
});
