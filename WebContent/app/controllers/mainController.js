
define(['app'], function(app){
	
	app.controller('mainController', ['$scope','$translate','$document','$window','$timeout','$filter', 'anchorSmoothScroll', '$location','baolingServices',
				              function($scope,  $translate,  $document,  $window,  $timeout, $filter, anchorSmoothScroll, $location,baolingServices){
		            
			console.log("This controlleris loading only one time");
			
			
	/* Initialize global variables */		
	$scope.headerClass = "headerTop";
	$scope.countryFlag = "USA";
	$scope.selectedLanguage = "en";
		
	
	
		/** ************************************************************************ */
	    /**							TRANSLATION SECTION								 */
	    /** ************************************************************************ */
	
	var changeFlag = function(flag){
			 
			switch(flag) {
				case "en":
					$scope.countryFlag = "USA";
					break;
				case "es":
					$scope.countryFlag = "Spain";
					break;
				case "cn":
					$scope.countryFlag = "China";
					break;	
					
				default:
					$scope.countryFlag = "USA";
			}
		
	}	
		
	$scope.$watch('selectedLanguage',function(lan){
		$translate.use(lan);
		changeFlag(lan);
	});
		
				
	
	
	/** ************************************************************************ */
    /**							TEMPLATE FUNCTIONS								 */
    /** ************************************************************************ */
	
	
	
	
	
	
	
	
	
    /* Full Height Container / Dropdowns
    -------------------------------------------------------*/       
  
	angular.element($window).resize(function(){
		
        container_full_height_init();    
        var windowWidth = angular.element($window).width();
        if (windowWidth <= 974) {
            angular.element('.dropdown-toggle').attr('data-toggle', 'dropdown');
            angular.element('.navigation').removeClass("sticky offset scrolling");
            angular.element('.nav-type-4').find(".local-scroll-no-offset").removeClass('local-scroll-no-offset').addClass("local-scroll");
        }
        if (windowWidth > 974) {
        	angular.element('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
        	angular.element('.dropdown').removeClass('open');
        	angular.element('.nav-type-4').find(".local-scroll").removeClass('local-scroll').addClass("local-scroll-no-offset");
        }

        /* Mobile Menu Resize
        -------------------------------------------------------*/
        angular.element(".navbar .navbar-collapse").css("max-height", angular.element($window).height() - angular.element(".navbar-header").height() );
        
    });


	/* Full Height Container
	-------------------------------------------------------*/
	function container_full_height_init(){
		angular.element(".container-full-height").height(angular.element($window).height());
	}
	
	
	
	
	 /* Sticky Navigation
    -------------------------------------------------------*/
	angular.element($window).scroll(function(){
        if (angular.element($window).scrollTop() > 50 && angular.element('.navbar-toggle').is(":hidden")){
        	angular.element('.navigation-overlay, .navigation').addClass("sticky");
        	angular.element('.logo-wrap').addClass("shrink");
        	angular.element('.nav-left .logo-wrap').removeClass("shrink");
        } else {
        	angular.element('.navigation-overlay, .navigation').removeClass("sticky");
        	angular.element('.logo-wrap').removeClass("shrink");
        }

        if (angular.element($window).scrollTop() > 200 && angular.element('.navbar-toggle').is(":hidden")){
        	angular.element('.navigation').addClass("offset");
        } else {
        	angular.element('.navigation').removeClass("offset");
        }

        if (angular.element($window).scrollTop() > 500 && angular.element('.navbar-toggle').is(":hidden")){
        	angular.element('.navigation').addClass("scrolling");
        } else {
        	angular.element('.navigation').removeClass("scrolling");
        }
    });
    
	
	
	/* Scroll Menu 
    -------------------------------------------------------*/
	 $scope.gotoPage = function(pageId) {
	      var newHash = pageId;
	      
	        // set the $location.hash to `newHash` and
	        // $anchorScroll will automatically scroll to it
	        $location.hash(pageId);
	        
	        // call $anchorScroll()
		    anchorSmoothScroll.scrollTo(pageId);
	      
	 }
	
	/* Scroll to Top
    -------------------------------------------------------*/

	 
	   angular.element('a[href="#top"]').on('click',function(){
	    	angular.element('html, body').animate({scrollTop: 0}, 'slow');
	        return false;
	   });
	    
	 
	 
	  // Display back to top button when user scroll down. 
	   angular.element($window).scroll(function(event){
	        var scroll = angular.element($window).scrollTop();
	        if (scroll >= 50) {
	        	angular.element("#back-to-top").addClass("show");
	        } else {
	        	angular.element("#back-to-top").removeClass("show");
	        }
	    });
	    

    /* Full screen Navigation
    -------------------------------------------------------*/
	angular.element('#nav-icon, .overlay-menu').on("click", function(){
		angular.element('#nav-icon').toggleClass('open');
		angular.element('#overlay').toggleClass('open');
    });

	
	
	// Closes the Responsive Menu on Menu Item Click
    function initOnepagenav(){
        
    	angular.element('.navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a').on('click',function() {
    		angular.element('.navbar-toggle:visible').click();
        });
    }
	
	
	$scope.isMobile = false;
	
    /* Mobile Navigation 
    -------------------------------------------------------*/
    angular.element('.dropdown-toggle').on('click', function(e){
        e.preventDefault();
    });


    /* IE Detect
    -------------------------------------------------------*/
    if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }

    /* Mobile Detect
    -------------------------------------------------------*/
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    	$scope.isMobile = true;
    	angular.element("html").addClass("mobile");
    	angular.element('.dropdown-toggle').attr('data-toggle', 'dropdown');
    }
    else {
    	$scope.isMobile = false;
    	angular.element("html").removeClass("mobile");
    }
	
    /* Text Rotator
    -------------------------------------------------------*/
    function initTextrotator(){

        angular.element(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",",
            speed: 3000 
        });

    }
    
    
 
	
	
	
	   /** ************************************************************************ */
	   /**							MAIN SECTION									*/
	   /** ************************************************************************ */
	   
	 
		/* Main Carousel options */
		/* The Title and subtitle is handle by translation json files. */
		$scope.options = {
				video:{
					mp4:"dist/videos/Baoling-Background.mp4",
					webm:"",
					ogv:""
				},
				carousel:[
				 	   {"title":"","subtitle":""},
				 	   {"title":"","subtitle":""},
				 	   {"title":"","subtitle":""}
				],
				titleColor:"#FFFFFF",
				subtibleColor:"red",
				carouselTransitonTime: 10 // time is measured in seconds. 
		}
		
		
		
		
		
		
		/** ************************************************************************ */
		/**							BACKGROUND SEPARATION	 									 */
		/** ************************************************************************ */
		
		
		
		/* Carousel background separation */
		
		  $scope.backSeparationCarousel = function(){
	            angular.element("#owl-backSeparation").owlCarousel({
	         
	                navigation: false,
	                slideSpeed: 300,
	                pagination: true,
	                paginationSpeed: 400,
	                singleItem: true,
	                autoPlay: 4000,
	                stopOnHover: true
	         
	            });

	      
	    };
		
		/** ************************************************************************ */
		/**							RESOURCES	 									 */
		/** ************************************************************************ */
		
	    /* Resources Carrousels
	    -------------------------------------------------------*/

		$scope.resourcesCarousel = [
			{image:"dist/img/blog/blog_1.jpg", entryTitle:"", entryMeta: "", date:"", entryContent:""},
			{image:"dist/img/blog/blog_2.jpg", entryTitle:"", entryMeta: "", date:"", entryContent:""},
			{image:"dist/img/blog/blog_3.jpg", entryTitle:"", entryMeta: "", date:"", entryContent:""}
		];
		
		  /* Owl Carousel
	    -------------------------------------------------------*/
		$scope.resourceCarousel = function(){
			
			  // Resources Carrousel
            var owlBlog = angular.element("#owl-blog");
            owlBlog.owlCarousel({
            
               slideSpeed: 300,
                pagination: false,
                paginationSpeed: 400,
                itemsCustom: [
                  [0, 1],      
                  [450, 1],
                  [1200, 2],
                ]
            
            });
        
            // Custom Navigation Events
            angular.element(".next").on('click',function(){
                owlBlog.trigger('owl.next');
            })
            angular.element(".prev").on('click',function(){
                owlBlog.trigger('owl.prev');
            });
			
		}
		
		
		
		
		
		 /** ************************************************************************ */
		 /**							CONTACT SECTION 							  */
		 /** ************************************************************************ */
		
		
		
		

		
		
		 /* Getting contact form information */
		
		
		$scope.userName = undefined;
		$scope.userEmail = undefined;
		$scope.userSubject = undefined;
		$scope.userMessage = undefined;
		
		
		$scope.submitForm = function(){
		
			/* Validate Form */
			/* It execute the HTML5 validations */
			angular.forEach($scope.contactForm.$error.required, function(field) {
			    field.$setDirty();
			});
			
			/* If the validations are valid it execute the code */
			if($scope.contactForm.$valid) {
			    //Do something
				console.log("The form is is valid  we can continue here");
				
				debugger;
				var messageObj = {
						userName: $scope.userName ,
						userMail: $scope.userEmail,
						messageSubject: $scope.userSubject,
						messageText: $scope.userMessage
				}
				
				
			
				baolingServices.createMessage.save({},messageObj).$promise.then(function(response){
					debugger;
					console.log("This is my response");
				})
			
				
			}   
			
		} // end submitForm 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	    /** ************************************************************************ */
		/**							INITIALIZE FUNCTIONS 							 */
		/** ************************************************************************ */

		

	    angular.element(document).ready(function(){
	    
	    	angular.element('.loader').fadeOut();
	        angular.element('.loader-mask').delay(350).fadeOut('slow');
	        angular.element($window).trigger("resize");
	        
	    	setTimeout(function(){
	    		angular.element('html, body').animate({scrollTop: 0}, 'slow'); // Scroll to the top when the page is ready
	    		angular.element($window).trigger("resize");
		        initOnepagenav();
		        initTextrotator();
		        $scope.backSeparationCarousel();
		        $scope.resourceCarousel();
	    		
	    	},100);
		 	
	 });   
		
		
		
		
		
		
		
		
	    
	    
	    
	    
	    
		
		
	
					
	}]);
});

