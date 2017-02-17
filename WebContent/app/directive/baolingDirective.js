	
	/* Author: Juan Huertas-Fernandez 
	 *  
	 */

	(function withAngular(angular) {

	  'use strict';

	  angular.module('template_tools', [])
	  
	  
		
		  /* Autofocus into doom elements */
		  .directive('autoFocus', function($timeout) {
		      return {
		          scope: {
		              trigger: '@autoFocus'
		          },
		          link: function(scope, element) {
		              scope.$watch('trigger', function(value) {
		                  console.log('focus to element ' + element[0].id + " " + value);
		                  if (value == 'true') {
		                      $timeout(function() {
		                          console.log('giving focus to element', element[0].id);
		                          element[0].focus();
		                      });
		                  }
		              });
		          }
		      };
		  })
		  
		  .directive('focusMe', function($timeout) {
			  return {
			    link: function(scope, element, attrs) {
			    	
			    	debugger;
			      scope.$watch(attrs.focusMe, function(value) {
			        if(value === true) { 
			          console.log('value=',value);
			          //$timeout(function() {
			            element[0].focus();
			            scope[attrs.focusMe] = false;
			          //});
			        }
			      });
			    }
			  };
			})
	
		  
		


	      
	    

	  
	  
		

	}(angular));
