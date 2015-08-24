// Bard Mythologies App

angular.module('BardApp', ['ionic', 'BardApp.controllers', 'BardApp.services'])

/* Boilerplate Ionic code */
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/* Bard code */
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

	$stateProvider.state('slider', {
		url: '/',
		templateUrl: 'templates/slider.html',
		controller: 'SlideController'
	})

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'MainController'
	})

    .state('app.home', {
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "templates/home.html"
			}
		}
    })

    .state('app.myth', {
		url: "/myths",
		views: {
			'menuContent': {
				templateUrl: "templates/myth.html",
				controller: "MythController"
			}
		}
    })

    .state('app.journeys', {
		url: "/journeys",
		views: {
			'menuContent': {
				templateUrl: "templates/journeys.html",
				controller: 'JourneyController'
			}
		}
    })

    .state('app.stories', {
		url: "/stories",
		cache: false,
		views: {
			'menuContent': {
				templateUrl: "templates/stories.html",
				controller: 'StoryController'
			}
		}
    })

    .state('app.characters', {
		url: "/characters",
		cache: false,
		views: {
			'menuContent': {
				templateUrl: "templates/characters.html",
				controller: 'CharacterController'
			}
		}
    })
});
