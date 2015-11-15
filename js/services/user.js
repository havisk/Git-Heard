let UserService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/getheard';
  let url2 = PARSE.URL + 'users';

  let checkAuth = function () {
    return true;
  }
  
  this.getUser = function() {
    if (checkAuth()){
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };
  this.getUser = function (userId) {
    if (checkAuth()){
      return $http({
        method:'GET',
        url: url + '/' + userId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let User = function(obj) {
    this.fullname = obj.fullname;
    this.email = obj.email;
    this.password = obj.password;
    this.location = obj.location;
    this.username = obj.username;
  };

  this.addUser = function(obj) {
    let u = new User(obj);
    return $http.post(url2, u, PARSE.CONFIG);
  };

  this.update = function(obj) {
    return $http.put(url, + '/' + obj.object.Id, PARSE.CONFIG);
  };

  this.delete = function(obj){
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

UserService.$inject = ['$http', 'PARSE'];

export default UserService;