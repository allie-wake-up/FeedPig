 var pig = angular.module('feedPig', []).
	config(function($routeProvider, $httpProvider) {
	 $routeProvider.when('/main', {
	 	templateUrl: 'views/main.html', 
	 	controller: 'MainCtrl'
	 }).otherwise({
	 	redirectTo: '/main'
	 });
 });
