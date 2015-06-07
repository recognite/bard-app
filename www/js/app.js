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

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
	controller: 'SlideController'
  })

    .state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'MainController'
    })

    .state('app.archetype', {
		url: "/archetype",
		views: {
			'menuContent': {
				templateUrl: "templates/archetype.html"
			}
		}
    })

    .state('app.journeys', {
		url: "/journeys",
		views: {
			'menuContent': {
				templateUrl: "templates/journeys.html"
			}
		},
		controller: 'JourneyController'
    })
})

.controller('SlideController', function($scope) {  
	$scope.myActiveSlide = 0;
	$scope.slides = [
		{title: 'IRISH MYTH & LEGEND', description: 'Discover the wonderful imagination and wisdom contained in the cycles of Irish Mythology', buttonText: 'GET STARTED', buttonLink: '#/home'},
		{title: 'ARCHETYPES', description: 'Learn about the mythological archetypes and take a quiz to see which one you identify with', buttonText: 'TAKE QUIZ', buttonLink: '#/app/archetype'},
		{title: 'CHARACTERS', description: 'Study the stories of warriors, kings, queens, and wizards', buttonText: 'LEARN MORE', buttonLink: '#/character'},
	];
  
})

.controller('MainController', function($scope) {  
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

.controller('JourneyController', function($scope) {
	$scope.groups = [];
	for (var i=0; i<5; i++) {
		$scope.groups[i] = {
			name: i,
			items: []
		};
		for (var j=0; j<3; j++) {
			$scope.groups[i].items.push(i + '-' + j);
		}
	}

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

