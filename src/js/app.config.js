var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise("/");   
    $stateProvider
        .state('article', {
            url: "/article/:articleId",
            templateUrl: 'src/js/modules/article/article.html',
            controller: 'articleController',
            controllerAs: 'articleVm'
        });

    $locationProvider.html5Mode(true);
}]);	