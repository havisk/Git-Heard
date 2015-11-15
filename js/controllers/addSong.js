let AddSongController = function($scope, $http, PARSE) {
    $scope.uploadFile = function(){
       $http.post("https://api.parse.com/1/files/sound.mp3", files[0],{
        withCredentials: false,
        headers: {
         ' X-Parse-Application-Id': 'KZubsuaEP5mWngRddElnioU22ok9OskFZazZsHeu',
         'X-Parse-REST-API-Key': 'lHBHuvBoNoPpDNxNgHg5Akjey5zLNJswmL7wgAI8',
         'Content-Type': 'sound/mp3'
        },
        transfromRequest: angular.identity
       }).then (function(data){

       });
    }; 
}

AddSongController.$inject = ['$scope', '$http', 'PARSE'];

export default AddSongController;