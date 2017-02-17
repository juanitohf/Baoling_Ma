define([], function()
{
		
	app.factory('Resource', ['$q', '$filter', '$timeout','$http', function ($q, $filter, $timeout,$http) {
	
		//this would be the service to call your server, a standard bridge between your model an $http
	
		// the database (normally on your server)
	
			var buyerData = [];
			
			$http.get('dataTable.json').
			  success(function(data) {
				  buyerData = data;
			  }).
			  error(function(data) {
			    congig.log("Error getting buyer data from server");
			  });
			//fake call to the server, normally this service would serialize table state to send it to the server (with query parameters for example) and parse the response
			//in our case, it actually performs the logic which would happened in the server
			function getPage(start, number, params) {
		
				var deferred = $q.defer();
		
				var filtered = params.search.predicateObject ? $filter('filter')(buyerData, params.search.predicateObject) : buyerData;
		
				if (params.sort.predicate) {
					filtered = $filter('orderBy')(filtered, params.sort.predicate, params.sort.reverse);
				}
		
				var result = filtered.slice(start, start + number);
				var numOfPages = buyerData.length;
			
				$timeout(function () {
					//note, the server passes the information about the data set size
					deferred.resolve({
						data: result,
						numberOfPages: numOfPages
					});
				}, 1500);
		
		
				return deferred.promise;
					
			}
		
			return {
				getPage: getPage
			};
			
			
			
		
			}]);
	


});


