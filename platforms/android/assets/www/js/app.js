// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

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
				templateUrl: "templates/home.html"
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
				templateUrl: "templates/character.html"
			}
		}
    })
})

.controller('SlideController', function($scope) {  
	$scope.myActiveSlide = 0;
	$scope.slides = [
		{title: 'DISCOVER DEEP FORGOTTEN WISDOM', description: 'Bard Mythologies revives the Bardic Tradition, a wisdom of the people, which helps us to view life beneath the surface and make sense of the world around us through the story, folklore, symbols and archetypal characters.', buttonText: 'Swipe left to continue', buttonLink: '#/app/home', img: "spiral.png"},
		{title: 'IRISH MYTH & LEGEND', description: 'Discover the wonderful imagination and wisdom contained in the cycles of Irish Mythology', buttonText: 'GET STARTED', buttonLink: '#/app/myths', img: "spiral.png"},
		{title: 'STORIES', description: 'Each cycle comprises a unique set of stories that contain the collective desires and goals of a people.', buttonText: 'GET STARTED', buttonLink: '#/app/stories', img: "spiral.png"},
		{title: 'CHARACTERS', description: 'The stories are filled with great heroic archetypes and characters that carry the wisdom of the people.', buttonText: 'GET STARTED', buttonLink: '#/app/characters', img: "spiral.png"},
		{title: 'ARCHETYPES', description: 'Archetypes appear throughout all stories. Discover which archetypal is closest to your personality.', buttonText: 'GET STARTED', buttonLink: '#/app/archetypes', img: "spiral.png"},
		{title: 'JOURNEYS', description: 'Gain a deeper insight into the stories by taking a guided journey on one of the wisdom paths.', buttonText: 'GET STARTED', buttonLink: '#/app/journeys', img: "spiral.png"}
	];
  
})


.controller('MainController', function($scope) {

})


.controller('StoryController', function($scope) {
	$scope.categories = [
		{title: "All"},
		{title: "Mythological Cycle"},
		{title: "Ulster Cycle"},
		{title: "Fenian Cycle"},
		{title: "King Cycle"}
	];

	$scope.results = [
		{name: "Aenghus Og", img: "ionic.png", cycle: "Mythological Cycle", story: "Midhir & Etain"},
		{name: "Aife", img: "ionic.png", cycle: "Ulster Cycle", story: "Tain"},
		{name: "Allil", img: "ionic.png", cycle: "Mythological Cycle", story: "Midhir & Etain"},
		{name: "Aoife", img: "ionic.png", cycle: "Mythological Cycle", story: "Children Of Lir"},
		{name: "Achtan", img: "ionic.png", cycle: "King Cycle", story: "Cormac mac Airt"},
		{name: "Balor", img: "ionic.png", cycle: "Mythological Cycle", story: "Battle Of Moytura"}
	];

	$scope.stories = [
		{title: "Midhir & Etain", link: "", img: "ionic.png"},
		{title: "Tain", link: "", img: "ionic.png"},
		{title: "Children Of Lir", link: "", img: "ionic.png"},
		{title: "Cormac mac Airt", link: "", img: "ionic.png"},
		{title: "Battle Of Moytura", link: "", img: "ionic.png"}
	];
})

.controller('PlayerController', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/story-player.html', {
		scope: $scope,
		animation: 'slide-in-right'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal = function() {
		$scope.modal.show();
	};

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});

	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
})


.controller('ArchetypeController', function($scope) {
	$scope.archetypes = [
		{category: "Transcendance", roles: [
				{title: "Hero/Heroine", img: "ionic.png"},
				{title: "Leader/King", img: "ionic.png"},
				{title: "Warrior", img: "ionic.png"},
				{title: "Virgin", img: "ionic.png"}
			]
		},
		{category: "Relationship", roles: [
				{title: "Guide/Teacher", img: "ionic.png"},
				{title: "Carer/Mother", img: "ionic.png"},
				{title: "Sage/Father", img: "ionic.png"},
				{title: "Partner/Friend", img: "ionic.png"}
			]
		},
		{category: "Physical Reality", roles: [
				{title: "Hero/Heroine", img: "ionic.png"},
				{title: "Leader/King", img: "ionic.png"},
				{title: "Warrior", img: "ionic.png"},
				{title: "Virgin", img: "ionic.png"}
			]
		},
		{category: "Transcendance", roles: [
				{title: "Hero/Heroine", img: "ionic.png"},
				{title: "Leader/King", img: "ionic.png"},
				{title: "Warrior", img: "ionic.png"},
				{title: "Virgin", img: "ionic.png"}
			]
		}
	];
})


.controller('JourneyController', function($scope) {  
	$scope.groups = [
		{name: "Hero's Journey", items: [
				{title: 'Hero #1', image: 'ionic.png'},
				{title: 'Hero #2', image: 'ionic.png'},
				{title: 'Hero #3', image: 'ionic.png'},
				{title: 'Hero #4', image: 'ionic.png'},
				{title: 'Hero #5', image: 'ionic.png'}
			]},
		{name: "Warrior's Journey", items: [
				{title: 'Warrior #1', image: 'ionic.png'},
				{title: 'Warrior #2', image: 'ionic.png'},
				{title: 'Warrior #3', image: 'ionic.png'}
			]},
		{name: "Lover's Journey", items: [
				{title: 'Lover #1', image: 'ionic.png'},
				{title: 'Lover #2', image: 'ionic.png'},
				{title: 'Lover #3', image: 'ionic.png'},
				{title: 'Lover #4', image: 'ionic.png'},
				{title: 'Lover #5', image: 'ionic.png'},
				{title: 'Lover #6', image: 'ionic.png'},
				{title: 'Lover #7', image: 'ionic.png'}
			]},
		{name: "Sage's Journey", items: [
				{title: 'Sage #1', image: 'ionic.png'},
				{title: 'Sage #2', image: 'ionic.png'},
				{title: 'Sage #3', image: 'ionic.png'},
				{title: 'Sage #4', image: 'ionic.png'},
				{title: 'Sage #5', image: 'ionic.png'}
			]}
	];

	/*
	 * if given group is the selected group, deselect it
	 * else, select the given group
	 */
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
})



