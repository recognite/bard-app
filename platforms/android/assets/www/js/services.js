angular.module('BardApp.services', [])

.service('ContentSvc', function($http) {
	this.SlideContent = function() {

		/* This content should come from a file. */
		slideContent = [
			{title: 'DISCOVER DEEP FORGOTTEN WISDOM', description: 'Bard Mythologies revives the Bardic Tradition, a wisdom of the people, which helps us to view life beneath the surface and make sense of the world around us through the story, folklore, symbols and archetypal characters.', button: "0", buttonText: 'Swipe left to continue', buttonLink: '#/app/home', img: "spiral.png"},
			{title: 'IRISH MYTH & LEGEND', description: 'Discover the wonderful imagination and wisdom contained in the cycles of Irish Mythology.', button: "1", buttonText: 'GET STARTED', buttonLink: '#/app/myths', img: "spiral.png"},
			{title: 'STORIES', description: 'Each cycle comprises a unique set of stories that contain the collective desires and goals of a people.', buttonText: 'GET STARTED', button: "1", buttonLink: '#/app/stories', img: "spiral.png"},
			{title: 'CHARACTERS', description: 'The stories are filled with great heroic archetypes and characters that carry the wisdom of the people.', buttonText: 'GET STARTED', button: "1", buttonLink: '#/app/characters', img: "spiral.png"},
			{title: 'JOURNEYS', description: 'Gain a deeper insight into the stories by taking a guided journey on one of the wisdom paths.', buttonText: 'GET STARTED', button: "1", buttonLink: '#/app/journeys', img: "spiral.png"}
		];

		return slideContent;
	}

	this.StoryContent = function() {
		storyMyths = [
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

		return storyMyths;
	}

	this.BasicStoryContent = function() {
		storyMyths = [
			{title: "Cian And Eithlinn", link: "", cycle: "Mythological"},
			{title: "Invasions 1 - Cesaire", link: "", cycle: "Mythological"},
			{title: "Invasions 2 - Partholon", link: "", cycle: "Mythological"},
			{title: "Invasions 3 - Nemed And The Fir Bolg", link: "", cycle: "Mythological"},
			{title: "Invasions 4 - The First Battle Of Moy Tura", link: "", cycle: "Mythological"},
			{title: "Invasions 5 - The Second Battle Of Moy Tura", link: "", cycle: "Mythological"},
			{title: "Invasions 6 - The Sons Of Mil And The Battle Of Tailtiu", link: "", cycle: "Mythological"},
			{title: "Midir And Etain", link: "", cycle: "Mythological"},
			{title: "The Dagda's Harp", link: "", cycle: "Mythological"},
			{title: "The Voyage Of Bran", link: "", cycle: "Mythological"},
			{title: "Book Of Invasions 1", link: "", cycle: "Mythological"},
			{title: "Book Of Invasions 2", link: "", cycle: "Mythological"},
			{title: "Book Of Invasions 3", link: "", cycle: "Mythological"},
			{title: "Book Of Invasions 4", link: "", cycle: "Mythological"},
			{title: "Cormac Mac Art 1", link: "", cycle: "Mythological"},
			{title: "Niall Of The Nine Hostages", link: "", cycle: "Mythological"},
			{title: "Diarmuid And Grainne", link: "", cycle: "Fenian"},
			{title: "Finn and the Fianna", link: "", cycle: "Fenian"},
			{title: "Finn - Birth And Boyhood", link: "", cycle: "Fenian"},
			{title: "Oisin In Tir na nOg", link: "", cycle: "Fenian"},
			{title: "Conaire Mor", link: "", cycle: "Kings"},
			{title: "Cormac Mac Art", link: "", cycle: "Kings"},
			{title: "Labhraidh Loingseach", link: "", cycle: "Kings"},
			{title: "Mongan", link: "", cycle: "Kings"},
			{title: "Niall Of The Nine Hostages", link: "", cycle: "Kings"},
			{title: "Setanta Joins The Boy's Troop", link: "", cycle: "Ulster"},
			{title: "How Cuchulainn Got His Name", link: "", cycle: "Ulster"},
			{title: "Cuchulainn - Taking Up Of Arms", link: "", cycle: "Ulster"},
			{title: "Cuchulainn - Wooing Of Emer", link: "", cycle: "Ulster"},
			{title: "Cuchulainn's Training With Scathach", link: "", cycle: "Ulster"},
			{title: "Deirdre Of The Sorrows", link: "", cycle: "Ulster"},
			{title: "Ferdia At The Ford", link: "", cycle: "Ulster"},
			{title: "The Champion's Portion 1", link: "", cycle: "Ulster"},
			{title: "The Champion's Portion 2", link: "", cycle: "Ulster"},
			{title: "The Champion's Portion 3", link: "", cycle: "Ulster"},
			{title: "The Death Of Cuchulainn", link: "", cycle: "Ulster"},
			{title: "The Sickbed Of Cuchulainn", link: "", cycle: "Ulster"},
			{title: "The Son Of Cuchulainn - Death Of Connla", link: "", cycle: "Ulster"}
		];

		return storyMyths;
	}

	this.CharacterContent = function() {
		characters = [];
/*
		$http.get('content/character-list.json').success(function(response){ 
			characters = response;
			return characters;
		}).error(function(data) {
			console.log("Error with http.get: no characters!");
		});
*/
		characters = [
    {
        "name": "Aengus Og",
        "link": "character_profiles/aengus-og.json",
        "img": "cycle_mythological/aenghus_og.png",
        "cycle": "Mythological"
    },
    {
        "name": "Allil",
        "link": "character_profiles/allill.json",
        "img": "cycle_mythological/allil.png",
        "cycle": "Mythological"
    },
    {
        "name": "Aoife",
        "link": "character_profiles/aoife.json",
        "img": "cycle_ulster/aoife.png",
        "cycle": "Ulster"
    },
    {
        "name": "Balor",
        "link": "character_profiles/balor.json",
        "img": "cycle_mythological/balor_eye.png",
        "cycle": "Mythological"
    },
    {
        "name": "Bodhbh Dearg",
        "link": "character_profiles/bodhbh-dearg.json",
        "img": "cycle_fenian/bodhbh_dearg.png",
        "cycle": "Fenian"
    },
    {
        "name": "Breas The Beautiful",
        "link": "character_profiles/breas.json",
        "img": "cycle_mythological/breas.png",
        "cycle": "Mythological"
    },
    {
        "name": "Bricriu of the Poisoned Tongue",
        "link": "character_profiles/bricriu.json",
        "img": "cycle_ulster/bricriu.png",
        "cycle": "Ulster"
    },
    {
        "name": "Brigid",
        "link": "character_profiles/brigid.json",
        "img": "cycle_mythological/brigit.png",
        "cycle": "Mythological"
    },
    {
        "name": "Cathbad",
        "link": "character_profiles/cathbad.json",
        "img": "cycle_ulster/cathbad.png",
        "cycle": "Ulster"
    }
];

		return characters;
	}

	this.MythContent = function() {
		whyMyths = [
			{name: "Why Myth", items: [
				{title: 'The Idea of the Bard', image: 'ionic.png'},
				{title: 'Collective Stories', image: 'ionic.png'},
				{title: 'Multi-Valent Stories', image: 'ionic.png'},
				{title: 'Always About Today', image: 'ionic.png'},
				{title: 'Why Myth', image: 'ionic.png'},
				{title: 'Why Myth', image: 'ionic.png'}
			]}
		];

		return whyMyths;
	}

	this.JourneyContent = function() {
		journeys = [
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

		return journeys;
	}

})

.service('AudioSvc', [function() {
 
  var AudioSvc = {
    my_media: null,
    mediaTimer: null,
    playAudio: function(src, cb) {
      var self = this;
 
      // stop playing, if playing
      self.stopAudio();
 
      self.my_media = new Media(src, onSuccess, onError);
      self.my_media.play();
 
      if (self.mediaTimer == null) {
        self.mediaTimer = setInterval(function() {
          self.my_media.getCurrentPosition(
            function(position) {
              cb(position, self.my_media.getDuration());
            },
            function(e) {
              console.log("Error getting pos=" + e);
            }
          );
        }, 1000);
      }
 
      function onSuccess() {
        console.log("playAudio():Audio Success");
      }
 
      // onError Callback
      //
      function onError(error) {
        // alert('code: ' + error.code + '\n' +
        //     'message: ' + error.message + '\n');
 
        // we forcefully stop
 
      }
 
    },
 
    resumeAudio: function() {
      var self = this;
      if (self.my_media) {
        self.my_media.play();
      }
    },
    pauseAudio: function() {
      var self = this;
      if (self.my_media) {
        self.my_media.pause();
      }
    },
    stopAudio: function() {
      var self = this;
      if (self.my_media) {
        self.my_media.stop();
      }
      if (self.mediaTimer) {
        clearInterval(self.mediaTimer);
        self.mediaTimer = null;
      }
    }
 
  };
 
  return AudioSvc;
}])