// Bard Mythologies App

angular.module('BardApp', ['ionic', 'BardApp.controllers', 'BardApp.services'])

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
				templateUrl: "templates/home.html",
				controller: "HomeController"
			}
		}
    })

    .state('app.myth', {
		url: "/myths",
		views: {
			'menuContent': {
				templateUrl: "templates/myth.html"
			}
		}
    })

    .state('app.archetypes', {
		url: "/archetypes",
		views: {
			'menuContent': {
				templateUrl: "templates/archetype.html",
				controller: "ArchetypeController"
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
		views: {
			'menuContent': {
				templateUrl: "templates/story.html",
				controller: 'StoryController'
			}
		}
    })

    .state('app.characters', {
		url: "/characters",
		views: {
			'menuContent': {
				templateUrl: "templates/character.html",
				controller: 'CharacterController'
			}
		}
    })
});
