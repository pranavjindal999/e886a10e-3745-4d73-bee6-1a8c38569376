(function(angular) {
    app.directive('articleCard', function() {
        return {
            restrict: 'E',
            scope: {
                articleId: "=?",
                article: "=?",
                layout: "="
            },
            controllerAs: 'articleCardVm',
            // templateUrl: 'dist/partials/articleCard.html',
            templateUrl: 'src/js/directives/articleCard/articleCard.html',
            controller: ['$scope', 'searchService', function($scope, searchService) {
                var articleCardVm = this;
                articleCardVm.layout = $scope.layout;

                $scope.$watch('layout',function(){
                    articleCardVm.layout = $scope.layout;
                })
                
                if ($scope.articleId) {
                    searchService.getArticle($scope.articleId).then(function(article) {
                        articleCardVm.article = article;
                    });
                } else {
                    articleCardVm.article = $scope.article;
                }
            }]
        };
    });
})(window.angular);
