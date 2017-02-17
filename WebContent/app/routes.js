define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
				controller: 'homeController',
                templateUrl: 'app/views/home.html',
                dependencies: [
                    'controllers/homeController'
                ]
            }
           
            
        }
    };
});
