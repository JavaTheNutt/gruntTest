angular
    .module('myApp')
    .controller('MainCtrl', ['$rootScope', function($rootScope){
        $rootScope.name = 'Home';
    }]);
