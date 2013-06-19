pig.directive('pigIScroll', function factory(/*injectables*/) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
	  		var myscroll = new iScroll(element[0], {
	  			hideScrollbar: false
	  		});
	  		console.log('iscroll applied');
	  	
	  		scope.$watch(function(value) {
				myscroll.refresh();
				console.log('iscroll updated');
	  		});
		},
	};
});

