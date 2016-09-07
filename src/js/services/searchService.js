app.factory('searchService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {
    var service = {};

    service.getRelatedArticles = function(articleId) {
        var deferred = $q.defer();

        $timeout(function() {
            var tempArticles = angular.copy(articles);
            for (var i = 0; i < tempArticles.length; i++) {
                if (articleId == tempArticles[i].articleId) {
                    tempArticles.splice(i, 1);
                    shuffle(tempArticles);
                    deferred.resolve(tempArticles);
                }
            }
        }, 100);
        return deferred.promise;
    }

    service.getArticle = function(articleId) {
        var deferred = $q.defer();

        $timeout(function() {
            deferred.resolve(articles[articleId-1]);
        }, 100);

        return deferred.promise;
    }

    var articles = [{
        articleId: 1,
        images: {
            rect: 'images/rect/1.jpg',
            sq: 'images/sq/1.jpg'
        },
        heading: "Lorem ipsum dolor sit amet eum",
        contentPreview: "Ei scaevola vulputate nam, his id iusto nostrud epicurei, everti aliquam salutatus mel an. Sit id soleat aeterno laoreet, at qui quas eirmod ocurreret, eum."
    }, {
        articleId: 2,
        images: {
            rect: 'images/rect/2.jpg',
            sq: 'images/sq/2.jpg'
        },
        heading: "Sententiae quaerend. Alii deserunt voluptatum",
        contentPreview: "Lorem ipsum dolor sit amet, cu nisl regione mel, et nam sonet persecuti. Ius tollit."
    }, {
        articleId: 3,
        images: {
            rect: 'images/rect/3.jpg',
            sq: 'images/sq/3.jpg'
        },
        heading: "Duo ad soluta labitur splendide",
        contentPreview: "Cu has munere corpora phaedrum. Eu his volutpat cotidieque, ne sit unum minimum vituperatoribus, veri feugiat facilis an nec. His velit dicam."
    }, {
        articleId: 4,
        images: {
            rect: 'images/rect/4.jpg',
            sq: 'images/sq/4.jpg'
        },
        heading: "Has graece bonorum perfecto ut ne",
        contentPreview: "Lorem ipsum dolor sit amet, probatus oportere mea at, meis etiam perpetua mel ei, at vim dicat errem. Qui meliore prodesset in, dolorum minimum senserit his cu. Unum atomorum laboramus."
    }, {
        articleId: 5,
        images: {
            rect: 'images/rect/5.jpg',
            sq: 'images/sq/5.jpg'
        },
        heading: "Elitr moderatius cu eos. Vel maluisset",
        contentPreview: "Sed ad impetus malorum interpretaris, te per volumus tractatos expetendis. His ad conceptam comprehensam. Sed brute vituperata efficiantur id. Sale consequat disputando per an, ei nonumes intellegat necessitatibus."
    }, {
        articleId: 6,
        images: {
            rect: 'images/rect/6.jpg',
            sq: 'images/sq/6.jpg'
        },
        heading: "Mea facer impetus no, enim delectus reformidans no",
        contentPreview: "Eos veri graeci utroque ut, enim viderer legendos ea mel. Sit ne iudicabit dignissim assentior, sea ad iriure legimus apeirian. Ex quo debet noster at."
    }];

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    return service;
}]);
