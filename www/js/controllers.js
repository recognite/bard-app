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


.controller('CharacterController', function($scope, ContentSvc) {

	$scope.characters = ContentSvc.CharacterContent();

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


.controller('StoryController', function($scope, ContentSvc) {

	$scope.myths = ContentSvc.StoryContent();
})

.controller('PlayerController', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/player.html', {
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
/*		AudioSvc.playAudio("http://site255.webelevate.net/bard/stories/bard-intro.mp3", function(a, b) {
			//console.log(a, b);
			$scope.position = Math.ceil(a / b * 100);
			if (a < 0) {
				$scope.stopAudio();
			}
			if (!$scope.$$phase) $scope.$apply();
		});
*/
		var media = new Media("http://site255.webelevate.net/bard/stories/bard-intro.mp3", onSuccess, onError);
      	media.play();

		function onSuccess() {
			$scope.outcome = "Playing";
		};

		function onSuccess() {
			$scope.outcome = "Not playing";
		};
	};

//	$scope.player = {title: "The Tale of the Bard", link: "http://site255.webelevate.net/bard/stories/bard-intro.mp3"};
	$scope.loaded = true;
	$scope.isPlaying = true;

	$scope.resumeAudio = function() {
		//AudioSvc.resumeAudio();
		$scope.isPlaying = true;
		$scope.outcome = "Resuming...";
		if (!$scope.$$phase) $scope.$apply();
	};

	$scope.pauseAudio = function() {
		//AudioSvc.pauseAudio();
		$scope.isPlaying = false;
		$scope.outcome = "Pausing...";
		if (!$scope.$$phase) $scope.$apply();
	};

	$scope.stopAudio = function() {
		//AudioSvc.stopAudio();
		$scope.loaded = false;
		$scope.isPlaying = false;
		$scope.outcome = "Stopping...";
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
});
