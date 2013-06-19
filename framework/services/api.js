pig.factory('api', function($http, $q, $timeout, base64) {
	var api = {};
	var baseUrl = 'https://api.feedbin.me/v2/';

	var encoded = base64.encode('');
	$http.defaults.headers.common.Authorization = 'Basic ' + encoded;
	$http.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
	
	api.getSubscriptions = function() {
		return $http.get(baseUrl+'subscriptions.json', function(results) {
			return results.data;
		});
		
		return deferred.promise;
	};
	
	return api;
});
