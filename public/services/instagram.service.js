angular.module('galPhoto')
    //Une factory ou service est un objet qui sera injecté à l'application, dans ce cas ci ce sera une gallerie qui sera injectée,
    //
    .factory('instagramFactory',function($resource){
        //on veut récuperer les photos populaire de instagram donc on return
        return{
            fetchPopular:function(callback){
                var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
                    client_id:'a850ec7a85db4bddb7af9a683af88a27'
                },
                    {
                        fetch:{method:'JSONP'}
                    });
                        api.fetch(function(response){
                        callback(response.data);
                });
            }
        }
    })