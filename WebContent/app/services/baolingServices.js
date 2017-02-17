/**
 * Baoling Services
 */

define([], function() {
	angular.module('baoling_services', [])
	
	.factory('baolingServices',
			[ '$q', '$resource', '$http', function($q, $resource, $http) {

				return {

					/* LOGIN */
					login : $resource('login', {}, {

						get : {
							method : 'GET',
							transformResponse : function(data, headers) {
								response = {}
								response.data = angular.fromJson(data);
								response.headers = headers();
								return response;
							}
						}

					}),
					
					createMessage: $resource('api/message', {})
					
					
					
					
					

				} // End return

			} 
			
			
			]) // End factory baolingServices

});

