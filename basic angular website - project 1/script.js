(function(){
    'use strict';

    angular
        .module('computershop',['ui.router'])
        .config(mainRouteConfig)
        .controller('HomeCtrl',HomeCtrl)
        .controller('AboutCtrl',AboutCtrl)
        .controller('ServicesCtrl',ServicesCtrl)
        .controller('ContactCtrl',ContactCtrl);

        function mainRouteConfig($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                })
                .state('about',{
                    url:'/about',
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .state('services',{
                    url:'/services',
                    templateUrl: 'views/services.html',
                    controller: 'ServicesCtrl'
                })
                .state('contact',{
                    url:'/contact',
                    templateUrl: 'views/contact.html',
                    controller: 'ContactCtrl'
                });
        };

        function HomeCtrl($scope){
            console.log('This is the home controller !');
        };

        function AboutCtrl($scope){
            console.log('This is the about controller !');
        };

        function ServicesCtrl($scope,$http){

            $scope.services;

            $http.get('data/ourservices.json')
                .then(function successCallBack(response){
                    $scope.services = response.data;
                },function errorCallBack(response){
                    console.log(response);
                });
        };

        function ContactCtrl($scope, $http){

            $scope.contacts;

            $http.get('data/contacts.json')
                .then(function successCallBack(response){
                    $scope.contacts = response.data;
                },function errorCallBack(response){
                    console.log(response);
                });
        };
})();