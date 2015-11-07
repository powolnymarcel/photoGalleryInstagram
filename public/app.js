                                    //Les dépendances de l'app
var app = angular.module('galPhoto',['ngRoute','ngResource','bootstrapLightbox']);

app.config(['$routeProvider','LightboxProvider',function($routeProvider,LightboxProvider){
    $routeProvider.
            when('/gallerie',{
            templateUrl:'views/gallerie.view.html',
            controller:'GallerieCtrl'
        })
        .otherwise({redirectTo:'/gallerie'});
    LightboxProvider.templateUrl = 'views/lightbox.view.html';
}]);