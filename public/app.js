                                    //Les dépendances de l'app
var app = angular.module('galPhoto',['ngRoute','ngResource']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
            when('/gallerie',{
            templateUrl:'views/gallerie.view.html',
            controller:'GallerieCtrl'
        })
        .otherwise({redirectTo:'/gallerie'});
}]);