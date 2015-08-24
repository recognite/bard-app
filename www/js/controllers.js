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
	 * Filter the list to show only the selected cycle
	 */
	$scope.filterList = function($criterion) {
		// Show all the characters from one of the four cycles
		if($criterion == 'Fenian' || $criterion == 'King' || $criterion == 'Mythological' || $criterion == 'Ulster') {
			$newList = $scope.characterList.filter(function(data) {
					return data.cycle == $criterion;
			});
			$scope.characterList = $newList;
		} else {	// Show all characters from all cycles
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

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$scope.showProfile = function(character) {
		$scope.profile = character;

		/*
		 * The icon and colour of the opening paragraph are dependant on the cycle of the character
		 */
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

		/*
		 * Load the profile content from a JSON file
		 */
		$http.get('content/' + $scope.profile.link).success(function(response){ 
			$scope.content = response;
		}).error(function(data) {
			console.log("Error with http.get");
		});

		/*
		 * Open the Profile modal window
		 */
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

	/*
	 * Returns the number of stories in the given cycle
	 */
	$scope.listSize = function(group) {
		return group.stories.length;
	};

	/*
	 * Returns the number of completed stories in the given cycle
	 */
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
		// Stop the audio, if its playing!
		AudioSvc.stopAudio();
		$scope.modal.hide();
	};

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

			/*
			 * Load the story content from a JSON file
			 */
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
				AudioSvc.playAudio($scope.tale.audio, function(a, b) {	// $scope.tale.audio is the web-link to the mp3 file
					$scope.position = Math.ceil(a / b * 100);	// Used by the progress bar in the Player modal window
					$scope.currentPos = Math.ceil(a);	// Should display the current position in the story as mm:ss
					$scope.total = Math.ceil(b);		// Should display the total length of the story in mm:ss
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

	/*
	 * Returns the number of myth items
	 */
	$scope.listSize = function(group) {
		return group.items.length;
	};

	/*
	 * Returns the number of completed myth items
	 */
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

	/*
	 * Returns the number of journey items
	 */
	$scope.listSize = function(group) {
		return group.items.length;
	};

	/*
	 * Returns the number of completed journey items
	 */
	$scope.completed = function(group) {
		$doneJourneys = group.items.filter(function(data) {
			return data.done == true;
		});
		return $doneJourneys.length;
	};
});
