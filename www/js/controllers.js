angular.module('BardApp.controllers', [])

.controller('SlideController', function($scope, ContentSvc) {  
	$scope.myActiveSlide = 0;
	$scope.slides = ContentSvc.SlideContent();
  
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


.controller('CharacterController', function($scope, $ionicSlideBoxDelegate, ContentSvc) {

	$scope.characters = ContentSvc.CharacterContent();
	$scope.characterList = $scope.characters;

	/* 
	 * Filter the list to show only the selected
	 */
	$scope.filterList = function($criterion) {
		if($criterion == 'Fenian' || $criterion == 'King' || $criterion == 'Mythological' || $criterion == 'Ulster') {
			$newList = $scope.characterList.filter(function(data) {
					return data.cycle == $criterion;
			});
			$scope.characterList = $newList;
		} else {	// All
			$scope.characterList = $scope.characters;
		}
	}

	$scope.placard = $scope.characters[0].name;
	$scope.snippet = $scope.characters[0].snippet;
	$scope.morelink = $scope.characters[0];
  
	$scope.slideChanged = function(index) {
		$scope.placard = $scope.characters[index].name;
		$scope.snippet = $scope.characters[index].snippet;
		$scope.morelink = $scope.characters[index];
	};

})


.controller('ProfileController', function($scope, $ionicModal, $http) {
	$ionicModal.fromTemplateUrl('templates/profile.html', {
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

	$scope.hidePlayer = function() {
		$scope.modal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$scope.showProfile = function(character) {
		$scope.profile = character;

		if($scope.profile.cycle === 'Mythological') {
			$scope.cycleCss = "profile-caption profile-mythological";
			$scope.cycleImg = "icon-cycle-myth.png";
		} else if($scope.profile.cycle === 'Ulster') {
			$scope.cycleCss = "profile-caption profile-ulster";
			$scope.cycleImg = "icon-cycle-ulster.png";
		} else if($scope.profile.cycle === 'Fenian') {
			$scope.cycleCss = "profile-caption profile-fenian";
			$scope.cycleImg = "icon-cycle-fenian.png";
		} else {	// Kings
			$scope.cycleCss = "profile-caption profile-kings";
			$scope.cycleImg = "icon-cycle-kings.png";
		}

		$http.get('content/' + $scope.profile.link).success(function(response){ 
			$scope.content = response;
		}).error(function(data) {
			console.log("Error with http.get");
		});
		$scope.openModal();
	};
})


.controller('StoryController', function($scope, ContentSvc) {

	$scope.myths = ContentSvc.StoryContent();
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

	$scope.listSize = function(group) {
		return group.stories.length;
	};

	$scope.completed = function(group) {
		return 0;
	};
})


.controller('PlayerController', function($scope, $ionicModal, $ionicPlatform, $http, AudioSvc) {
	$ionicModal.fromTemplateUrl('templates/player.html', {
		scope: $scope,
		animation: 'slide-in-right'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.showPlayer = function() {
		$scope.modal.show();
	};

	$scope.hidePlayer = function() {
		$scope.modal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$ionicPlatform.ready(function() {

		$scope.openPlayer = function(cycle, story) {
			$scope.tale = story;
			$scope.loaded = true;
			$scope.isPlaying = false;

			$scope.title = story.title;
			$scope.cycle = cycle;

			$http.get('content/stories/' + $scope.tale.link).success(function(response){ 
				$scope.paras = response;
			}).error(function(data) {
				console.log("Error in PlayerController with http.get");
			});

			$scope.position = 30;
			$scope.currentPos = "05:10";
			$scope.total = "10:09";

			$scope.showPlayer();
		};

		$scope.playStory = function() {
			AudioSvc.playAudio("http://site255.webelevate.net/bard/stories/bard-intro.mp3", function(a, b) {
				$scope.position = Math.ceil(a / b * 100);
				if (a < 0) {
					$scope.stopAudio();
				}
				if (!$scope.$$phase) $scope.$apply();
			});
			$scope.isPlaying = true;
		};

		$scope.pauseStory = function() {
			AudioSvc.pauseAudio();
			$scope.isPlaying = false;
			if (!$scope.$$phase) $scope.$apply();
		};
	});

})

.controller('MythController', function($scope, ContentSvc) {
	$scope.groups = ContentSvc.MythContent();

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


.controller('JourneyController', function($scope, ContentSvc) {  
	$scope.groups = ContentSvc.JourneyContent();

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

	$scope.listSize = function(group) {
		return group.items.length;
	};

	$scope.completed = function(group) {
		return 0;
	};
});
