let ProfileController = function($scope, $stateParams, UserService, $state) {

  UserService.getUser($stateParams.userId). then((res) => {
    $scope.singleUser = res.data;
  });

  $scope.deleteMe = function (obj) {
    UserService.delete(obj).then((res) => {
      $state.go('root.home');
    });
  };
};
ProfileController.$inject = ['$scope', '$stateParams', 'UserService', '$state'];
export default ProfileController