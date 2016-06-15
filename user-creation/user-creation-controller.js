(function(window, angular, undefined){
  angular.module('chatApp')
    .controller("userCreationCtrl", ['$rootScope' ,'$scope', function($rootScope, $scope){
      var vm = this;
      vm.username = undefined;

      vm.createUser = function(username){
        console.log("this is creating the user ", username);
        $rootScope.$emit('new-user', username);
      }

    }])
})(window, window.angular);