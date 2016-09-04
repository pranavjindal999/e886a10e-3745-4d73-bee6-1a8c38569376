(function(angular) {
   app.controller('indexController', ['$window', '$scope', '$rootScope', '$state', 'searchService', '$stateParams',
        function($window, $scope, $rootScope, $state, searchService, $stateParams) {
    		var windowResize = function() {
                    if ($window.innerWidth < 601) {
                        $rootScope.isMobile = true;
                        $rootScope.isTablet = false;
                        $rootScope.mobilePaddingMargin = "zero-padding zero-margin";
                    } else if ($window.innerWidth < 1025) {
                        $rootScope.isMobile = false;
                        $rootScope.isTablet = true;
                        $rootScope.mobilePaddingMargin = "";
                    } else {
                        $rootScope.isMobile = false;
                        $rootScope.isTablet = false;
                        $rootScope.mobilePaddingMargin = "";
                    }
                }

                angular.element($window).on('resize', function() {
                    $scope.$apply(function() {
                        windowResize();
                    });
                });
                windowResize();
           
        }
    ]);
})(window.angular);
