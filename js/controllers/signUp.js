let SignUpController = function($scope, UserService) {
  
  $scope.addUser = (obj) => {
    UserService.addUser(obj).then( (res) => {
      $scope.user = {};
    });
  };

};

SignUpController.$inject = ['$scope', 'UserService'];

export default SignUpController;