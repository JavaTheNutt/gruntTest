angular
    .module('myApp', [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl:'templates/home.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            })
    }]);



angular.module('myApp')
    .controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.name = 'about';
    }]);


angular
    .module('myApp')
    .controller('MainCtrl', ['$scope', function($scope){
        $scope.name = 'joe';
    }]);
