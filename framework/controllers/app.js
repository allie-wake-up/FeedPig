pig.controller('MainCtrl', function($scope, $http, api) {
	api.getSubscriptions().then(function(results) {
		$scope.subscriptions = results;
	});
});
