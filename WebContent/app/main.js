
require.config({
    paths: {
    	'angular':'../webjars/angularjs/1.5.8/angular.min',
		'angular-route':'../webjars/angularjs/1.5.8/angular-route.min',
		'angular-resource':'../webjars/angularjs/1.5.8/angular-resource.min',	
		
		'angular-animate':'../webjars/angularjs/1.5.8/angular-animate',
		'angular-aria':'../webjars/angularjs/1.5.8/angular-aria.min',
		'angular-messages':'../webjars/angularjs/1.5.8/angular-messages.min',	
		'angular-touch':'../webjars/angularjs/1.5.8/angular-touch.min',
		
		'angular-ui-bootstrap':'../dist/js/plugins/angular-ui-bootstrap/ui-bootstrap-2.5.0.min',
		'bootstrap':'../webjars/bootstrap/3.3.6/js/bootstrap.min',	
		
		'angular-translate':'../dist/js/plugins/angular-translate/angular-translate.min',
		'angular-translate-loader-url':'../dist/js/plugins/angular-translate/angular-translate-loader-url.min',
		'angular-translate-loader-static-files':'../dist/js/plugins/angular-translate/angular-translate-loader-static-files.min',
		'angular-video-background':'../dist/js/plugins/angular-video-background/angular-video-background',
		'angular-web-components':'../dist/js/plugins/angular-web-components/angular-web-components',

		
		
		/* jQuery Libraries */
		'jquery':'../webjars/jquery/1.11.1/jquery.min',
		'jquery-plugins':'../dist/js/template/plugins',
		
		
		
		
		/* Services */
		'baoling-services':'../app/services/baolingServices',
		
		/* directive */
		'baoling-directives':'../app/directive/baolingDirective'
		
			

    },
	shim: {
		
	
		'angular': {
			deps: ['jquery']
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-resource': {
			deps: ['angular']
		},
		
		'angular-animate': {
			deps: ['angular']
		},
		
		'angular-aria': {
			deps: ['angular']
		},
		
		'angular-messages': {
			deps: ['angular']
		},
		
		'angular-touch': {
			deps: ['angular']
		},
		
		'angular-ui-bootstrap': {
			deps: ['angular-animate','angular-aria','angular-messages','angular-touch']
		},

		
		'angular-translate': {
			deps: ['angular']
		},
		'angular-translate-loader-url': {
			deps: ['angular','angular-translate']
		},
		'angular-translate-loader-static-files': {
			deps: ['angular','angular-translate']
		},
		'angular-video-background': {
			deps: ['angular']
		},
		
		'angular-web-components': {
			deps: ['angular']
		},
		
		'baoling-services': {
			deps: ['angular','angular-resource']
		},
		
		'baoling-directives': {
			deps: ['angular']
		},
		
		'bootstrap': {
			deps: ['jquery']
		},
		'jquery-plugins': {
			deps: ['jquery']
		},
		
		'app': {
			deps: ['angular','angular-route','angular-resource', 'angular-ui-bootstrap','angular-translate',
				   'angular-translate-loader-url','angular-translate-loader-static-files','angular-video-background','angular-web-components',
				   'baoling-services', 'baoling-directives', 'bootstrap','jquery-plugins']
		}
		
	},
	urlArgs: "bust=" +  (new Date()).getTime()
});




require(
    ['app','controllerReferences'],
		function(app,references)
		{
			require(references,function(){
				angular.bootstrap(document, ['app']);
			})
			
		}
);


	
	

