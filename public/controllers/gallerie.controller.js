angular.module('galPhoto')
    .controller('GallerieCtrl',['$scope','instagramFactory',function($scope,instagramFactory){
        $scope.images=[];
        instagramFactory.fetchPopular(function(data){
            $scope.images= data;
            console.log(data);

        })
    }])