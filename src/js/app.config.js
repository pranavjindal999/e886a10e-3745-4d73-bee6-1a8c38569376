var app = angular.module('app', ['ui.router','duScroll']);

app.config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise("/");   
    $stateProvider
        .state('article', {
            url: "/:articleId",
            // templateUrl: 'dist/partials/article.html',
            templateUrl: 'src/js/modules/article/article.html',
            controller: 'articleController',
            controllerAs: 'articleVm'
        });

    $locationProvider.html5Mode(true);
}]);	