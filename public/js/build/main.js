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
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            })
    }]);




angular.module('myApp')
    .controller('AboutCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.name = 'About';
    }]);


angular.module('myApp')
    .controller('ContactCtrl', ['$rootScope', function ($rootScope){
        $rootScope.name = 'Contact';
    }]);

angular
    .module('myApp')
    .controller('MainCtrl', ['$rootScope', function($rootScope){
        $rootScope.name = 'Home';
    }]);
