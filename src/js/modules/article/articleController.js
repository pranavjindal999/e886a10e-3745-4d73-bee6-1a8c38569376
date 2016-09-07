(function(angular) {
    app.controller('articleController', ['$document', '$scope', '$rootScope', '$state', 'searchService', '$stateParams',
        function($document, $scope, $rootScope, $state, searchService, $stateParams) {

        	var articleVm = this;
           	
           	articleVm.init = function(){

           		if(!$stateParams.articleId)
           			$stateParams.articleId=1;
           		
           		searchService.getArticle($stateParams.articleId).then(function(article){
           			articleVm.article = article;
           		});

           		searchService.getRelatedArticles($stateParams.articleId).then(function(relatedArticles){
           			articleVm.relatedArticles = relatedArticles;
           		});

           		searchService.getRelatedArticles($stateParams.articleId).then(function(relatedArticles){
           			articleVm.seriesArticles = relatedArticles.splice(0,2);
           		});

           		angular.element($document).scrollTo(0, 0, 700);
           	}

			
        }
    ]);
})(window.angular);
