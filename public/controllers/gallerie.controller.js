angular.module('galPhoto')
    .controller('GallerieCtrl',['$scope','instagramFactory','Lightbox',function($scope,instagramFactory,Lightbox){
        $scope.images=[];
        var imgArray=[];

        instagramFactory.fetchPopular(function(data){
            $scope.images= data;
            angular.forEach(data,function(value,key){
                imgArray.push(value.images.standard_resolution);
            });

            console.log(data);
            $scope.openLightboxModal= function(index){
                Lightbox.openModal(imgArray, index);
            }
        })
    }])