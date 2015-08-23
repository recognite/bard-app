angular.module('BardApp.controllers', [])

.controller('SlideController', function($scope, ContentSvc) {  
	$scope.myActiveSlide = 0;
	$scope.slides = ContentSvc.SlideContent();
  
})


.controller('MainController', function($scope) {

})


.controller('CharacterController', function($scope, $ionicSlideBoxDelegate, ContentSvc) {

	$scope.characters = ContentSvc.CharacterContent();
	console.log("CharCtrl: " + $scope.characters[0]);
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

	/*
	 * Setup the default/first character text and button link
	 */
	$scope.placard = $scope.characters[0].name;
	$scope.snippet = $scope.characters[0].snippet;
	$scope.morelink = $scope.characters[0];

	/*
	 * Change the text and button link based on which character is shown in the slider
	 */
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
		$doneStories = group.stories.filter(function(data) {
			return data.done == true;
		});
		return $doneStories.length;
	};
})


.controller('PlayerController', function($scope, $ionicModal, $ionicPlatform, $http, $filter, AudioSvc) {
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
		// Kill the audio, if its playing!
		AudioSvc.stopAudio();
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
			$scope.resumePlay = false;

			$scope.title = story.title;
			$scope.cycle = cycle;

			$http.get('content/stories/' + $scope.tale.link).success(function(response){ 
				$scope.paras = response;
			}).error(function(data) {
				console.log("Error in PlayerController with http.get");
			});

			$scope.position = 0;
			$scope.currentPos = "00:00";
			$scope.total = "00:00";

			$scope.showPlayer();
		};

		$scope.playStory = function() {
			if($scope.resumePlay === false) {	// First play
				AudioSvc.playAudio($scope.tale.audio, function(a, b) {
					$scope.position = Math.ceil(a / b * 100);
					$scope.currentPos = Math.ceil(a);
					$scope.total = Math.ceil(b);
					if (a < 0) {
						AudioSvc.stopAudio();
					}
					$scope.resumePlay = true;
					if (!$scope.$$phase) $scope.$apply();
				});
			} else {	// Resume from pause
				AudioSvc.resumeAudio();
				if (!$scope.$$phase) $scope.$apply();
			}

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

	$scope.listSize = function(group) {
		return group.items.length;
	};

	$scope.completed = function(group) {
		$doneMyths = group.items.filter(function(data) {
			return data.done == true;
		});
		return $doneMyths.length;
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
		$doneJourneys = group.items.filter(function(data) {
			return data.done == true;
		});
		return $doneJourneys.length;
	};
});
