// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic', 'ionicApp.services'])

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


.controller('HomeController', function($scope) {
	$scope.modules = [
		{progress: "done"},
		{progress: "done"},
		{progress: "done"},
		{progress: "done"},
		{progress: "todo"},
		{progress: "todo"},
		{progress: "todo"},
		{progress: "todo"},
		{progress: "todo"},
		{progress: "todo"}
	];

	/*
	 * Functions for incrementing progress go here!
	 */
})


.controller('CharacterController', function($scope) {

	$scope.characters = [
		{name: "Aengus Og", link:"", img: "ionic.png", stories: [
			{title: "Midhir and Etain", link: "", img: "ionic.png", cycle: "Mythological"}
		]},
		{name: "Allil", link:"", img: "ionic.png", stories: [
			{title: "Midhir and Etain", link: "", img: "ionic.png", cycle: "Mythological"}
		]},
		{name: "Aoife", link:"", img: "ionic.png", stories: [
			{title: "Children Of Lir", link: "", img: "ionic.png", cycle: "Mythological"}
		]},
		{name: "Balor", link:"", img: "", stories: [
			{title: "Battle Of Moytura", link: "", img: "ionic.png", cycle: "Mythological"}
		]},
		{name: "Cuchulainn", link:"", img: "ionic.png", stories: [
			{title: "Setanta Joins the Boy's Troop", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "How Cuchulainn Got his Name", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "Cuchulainn Taking Up Of Arms", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "Cuchulainn Wooing of Emer", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "Cuchulainn's Training with Scathach", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Champion's Portion 1", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Champion's Portion 2", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Champion's Portion 3", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Death of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Sickbed of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"},
			{title: "The Son of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"}
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


.controller('StoryController', function($scope) {
	$scope.categories = [
		{title: "All"},
		{title: "Mythological Cycle"},
		{title: "Ulster Cycle"},
		{title: "Fenian Cycle"},
		{title: "King Cycle"}
	];

	$scope.stories = [
		{title: "Finn and the Fianna", link: "", img: "ionic.png", cycle: "Fenian"},
		{title: "Finn birth and boyhood", link: "", img: "ionic.png", cycle: "Fenian"},
		{title: "Oisin in Tir na nOg", link: "", img: "ionic.png", cycle: "Fenian"},
		{title: "Conaire Mor", link: "", img: "ionic.png", cycle: "Kings"},
		{title: "Cormac Mac Airt", link: "", img: "ionic.png", cycle: "Kings"},
		{title: "Mongan", link: "", img: "ionic.png", cycle: "Kings"},
		{title: "Niall of the Nine Hostages", link: "", img: "ionic.png", cycle: "Kings"},
		{title: "Cesaire (Invasion 1)", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "Partholon (Invasion 2)", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "Nemed and the Fir Bolg (Invasion 3)", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "The Tuatha de Danaan (Invasion 4)", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "The Sons of Mil (Invasion 5)", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "Midir and Etain", link: "", img: "ionic.png", cycle: "Mythological"},
		{title: "Setanta Joins the Boy's Troop", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "How Cuchulainn Got his Name", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "Cuchulainn Taking Up Of Arms", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "Cuchulainn Wooing of Emer", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "Cuchulainn's Training with Scathach", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "Deirdre of the Sorrows", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "Ferdia at the Ford", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Champion's Portion 1", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Champion's Portion 2", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Champion's Portion 3", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Death of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Sickbed of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"},
		{title: "The Son of Cuchulainn", link: "", img: "ionic.png", cycle: "Ulster"}
	];


	$scope.myths = [
		{cycle: "Mythological", stories: [
			{title: "Cian And Eithlinn", link: ""},
			{title: "Invasions 1 - Cesaire", link: ""},
			{title: "Invasions 2 - Partholon", link: ""},
			{title: "Invasions 3 - Nemed And The Fir Bolg", link: ""},
			{title: "Invasions 4 - The First Battle Of Moy Tura", link: ""},
			{title: "Invasions 5 - The Second Battle Of Moy Tura", link: ""},
			{title: "Invasions 6 - The Sons Of Mil And The Battle Of Tailtiu", link: ""},
			{title: "Midir And Etain", link: ""},
			{title: "The Dagda's Harp", link: ""},
			{title: "The Voyage Of Bran", link: ""},
			{title: "Book Of Invasions 1", link: ""},
			{title: "Book Of Invasions 2", link: ""},
			{title: "Book Of Invasions 3", link: ""},
			{title: "Book Of Invasions 4", link: ""},
			{title: "Cormac Mac Art 1", link: ""},
			{title: "Niall Of The Nine Hostages", link: ""}
		]},
		{cycle: "Fenian", stories: [
			{title: "Diarmuid And Grainne", link: ""},
			{title: "Finn and the Fianna", link: ""},
			{title: "Finn - Birth And Boyhood", link: ""},
			{title: "Oisin In Tir na nOg", link: ""}
		]},
		{cycle: "Kings", stories: [
			{title: "Conaire Mor", link: ""},
			{title: "Cormac Mac Art", link: ""},
			{title: "Labhraidh Loingseach", link: ""},
			{title: "Mongan", link: ""},
			{title: "Niall Of The Nine Hostages", link: ""}
		]},
		{cycle: "Ulster", stories: [
			{title: "Setanta Joins The Boy's Troop", link: ""},
			{title: "How Cuchulainn Got His Name", link: ""},
			{title: "Cuchulainn - Taking Up Of Arms", link: ""},
			{title: "Cuchulainn - Wooing Of Emer", link: ""},
			{title: "Cuchulainn's Training With Scathach", link: ""},
			{title: "Deirdre Of The Sorrows", link: ""},
			{title: "Ferdia At The Ford", link: ""},
			{title: "The Champion's Portion 1", link: ""},
			{title: "The Champion's Portion 2", link: ""},
			{title: "The Champion's Portion 3", link: ""},
			{title: "The Death Of Cuchulainn", link: ""},
			{title: "The Sickbed Of Cuchulainn", link: ""},
			{title: "The Son Of Cuchulainn - Death Of Connla", link: ""}
		]}
	];
})

.controller('PlayerController', function($scope, $ionicModal, AudioSvc) {
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

	$scope.playStory = function(story) {
		$scope.player = story;
		$scope.openModal();
		AudioSvc.playAudio("http://site255.webelevate.net/bard/stories/bard-intro.mp3", function(a, b) {
			//console.log(a, b);
			$scope.position = Math.ceil(a / b * 100);
			if (a < 0) {
				$scope.stopAudio();
			}
			if (!$scope.$$phase) $scope.$apply();
		});
	};

//	$scope.player = {title: "The Tale of the Bard", link: "http://site255.webelevate.net/bard/stories/bard-intro.mp3"};
	$scope.loaded = true;
	$scope.isPlaying = true;

	$scope.resumeAudio = function() {
		AudioSvc.resumeAudio();
		$scope.isPlaying = true;
		if (!$scope.$$phase) $scope.$apply();
	};

	$scope.pauseAudio = function() {
		AudioSvc.pauseAudio();
		$scope.isPlaying = false;
		if (!$scope.$$phase) $scope.$apply();
	};

	$scope.stopAudio = function() {
		AudioSvc.stopAudio();
		$scope.loaded = false;
		$scope.isPlaying = false;
		if (!$scope.$$phase) $scope.$apply();
	};	

/*
	$ionicPlatform.ready(function() {

		AudioSvc.playAudio("http://site255.webelevate.net/bard/stories/bard-intro.mp3", function(a, b) {
			//console.log(a, b);
			$scope.position = Math.ceil(a / b * 100);
			if (a < 0) {
				$scope.stopAudio();
			}
			if (!$scope.$$phase) $scope.$apply();
		});
 
		$scope.loaded = true;
		$scope.isPlaying = true;
		$scope.name = file.name;
		$scope.path = file.fullPath;

		// show the player
		$scope.player();

		$scope.pauseAudio = function() {
			AudioSvc.pauseAudio();
			$scope.isPlaying = false;
			if (!$scope.$$phase) $scope.$apply();
		};
		$scope.resumeAudio = function() {
			AudioSvc.resumeAudio();
			$scope.isPlaying = true;
			if (!$scope.$$phase) $scope.$apply();
		};
		$scope.stopAudio = function() {
			AudioSvc.stopAudio();
			$scope.loaded = false;
			$scope.isPlaying = false;
			if (!$scope.$$phase) $scope.$apply();
		};
	}
*/
})


.controller('ArchetypeController', function($scope) {
	$scope.archetypes = [
		{category: "Transcendance", roles: [
				{title: "Hero / Heroine", img: "ionic.png"},
				{title: "Leader / King", img: "ionic.png"},
				{title: "Warrior", img: "ionic.png"},
				{title: "Virgin", img: "ionic.png"}
			]
		},
		{category: "Relationship", roles: [
				{title: "Guide / Teacher", img: "ionic.png"},
				{title: "Carer / Mother", img: "ionic.png"},
				{title: "Sage / Father", img: "ionic.png"},
				{title: "Partner / Friend", img: "ionic.png"}
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



