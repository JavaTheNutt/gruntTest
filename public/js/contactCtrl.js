angular.module('myApp')
    .controller('ContactCtrl', ['$rootScope', function ($rootScope){
        $rootScope.name = 'Contact';
    }]);