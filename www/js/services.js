angular.module('BardApp.services', [])

.service('ContentSvc', function($http) {
	this.SlideContent = function() {
		slideContent = [
			{
				"title": "DISCOVER DEEP FORGOTTEN WISDOM", 
				"description": "Bard Mythologies revives the Bardic Tradition, a wisdom of the people, which helps us to view life beneath the surface and make sense of the world around us through the story, folklore, symbols and archetypal characters.", 
				"button": "0",
				"buttonText": "Swipe left to continue", 
				"buttonLink": "#/app/home", 
				"img": "onboard-logo.png"
			},
			{
				"title": "IRISH MYTH & LEGEND", 
				"description": "Discover the wonderful imagination and wisdom contained in the cycles of Irish Mythology.", 
				"button": "1", 
				"buttonText": "GET STARTED", 
				"buttonLink": "#/app/myths", 
				"img": "onboard-myth.png"
			},
			{
				"title": "STORIES", 
				"description": "Each cycle comprises a unique set of stories that contain the collective desires and goals of a people.",
				"button": "1",
				"buttonText": "GET STARTED",
				"buttonLink": "#/app/stories",
				"img": "onboard-stories.png"
			},
			{
				"title": "CHARACTERS", 
				"description": "The stories are filled with great heroic archetypes and characters that carry the wisdom of the people.",
				"button": "1",
				"buttonText": "GET STARTED",
				"buttonLink": "#/app/characters",
				"img": "onboard-characters.png"
			},
			{
				"title": "JOURNEYS", 
				"description": "Gain a deeper insight into the stories by taking a guided journey on one of the wisdom paths.", 
				"button": "1",
				"buttonText": "GET STARTED", 
				"buttonLink": "#/app/journeys", 
				"img": "onboard-journeys.png"
			}
		];

		return slideContent;
	}

	this.StoryContent = function() {
		storyMyths = [
			{
				"cycle": "Mythological",
				"image": "icon-cycle-myth.png",
				"stories": [
				    {
				        "title": "Invasions 1 - Cesaire",
				        "link": "cycle_mythological/book-of-invasions-1-cesaire.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-02-Invasions-1-Cesaire-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Invasions 2 - Partholon",
				        "link": "cycle_mythological/book-of-invasions-2-partholon.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-03-Invasions-2-Partholon-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Invasions 3 - Nemed And The Fir Bolg",
				        "link": "cycle_mythological/book-of-invasions-3-nemed-and-the-fir-bolg.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-04-Invasions-3-Nemed-and-the-Fir-Bolg-192Kbps-CBR.mp3",
						"done": true
				    },
				    {
				        "title": "Invasions 4 - The First Battle Of Moy Tura",
				        "link": "cycle_mythological/book-of-invasions-4-tuatha-de-dannan.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-05-Invasions-4-The-First-Battle-of-Moy-Tura-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Invasions 5 - The Second Battle Of Moy Tura",
				        "link": "cycle_mythological/book-of-invasions-5-the-sons-of-mil.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-06-Invasions-5-The-Second-Battle-of-Moy-Tura-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Invasions 6 - The Sons Of Mil And The Battle Of Tailtiu",
				        "link": "cycle_mythological/",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-07-Invasions-6-The-Sons-of-Mil-and-the-Battle-of-Tailtiu-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Midir And Etain",
				        "link": "cycle_mythological/midir-and-etain.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Myth-08-Midir-and-Etain-192Kbps-CBR.mp3",
						"done": false
				    }
				]
			},
			{
				"cycle": "Ulster",
				"image": "icon-cycle-ulster.png",
				"stories": [
				    {
				        "title": "Setanta Joins The Boy's Troop",
				        "link": "cycle_ulster/setanta-joins-the-boys-troop.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-01-Setanta-Joins-the-Boy’s-Troop-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "How Cuchulainn Got His Name",
				        "link": "cycle_ulster/how-cuchulainn-got-his-name.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-02-How-Cuchulainn-Got-his-Name-192Kbps-CBR.mp3",
						"done": true
				    },
				    {
				        "title": "Cuchulainn - Taking Up Of Arms",
				        "link": "cycle_ulster/how-cuchulainn-took-up-arms.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-03-Cuchulainn-Taking-up-of-Arms-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Cuchulainn - Wooing Of Emer",
				        "link": "cycle_ulster/cuchulainn-the-wooing-of-emer.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-04-Cuchulainn-Wooing-of-Emer-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Cuchulainn's Training With Scathach",
				        "link": "cycle_ulster/cuchulainns-training-with-scathach.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-05-Cuchulainn’s-Training-With-Scathach-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Deirdre Of The Sorrows",
				        "link": "cycle_ulster/deirdre-of-the-sorrows.json",
						"audio": "",
						"done": false
				    },
				    {
				        "title": "Ferdia At The Ford",
				        "link": "cycle_ulster/ferdia-at-the-ford.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-07-Ferdia-at-the-Ford-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "The Champion's Portion 1",
				        "link": "cycle_ulster/cuchulainn-and-the-champions-portion-1-bricrius-feast.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-08-The-Champion’s-Portion-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "The Champion's Portion 2",
				        "link": "cycle_ulster/cuchulainn-and-the-champions-portion-2-tests-at-cruachan.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-09-The-Champion’s-Portion-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "The Champion's Portion 3",
				        "link": "cycle_ulster/cuchulainn-and-the-champions-portion-3-cu-roi-mac-dara.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-10-The-Champion’s-Portion-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "The Death Of Cuchulainn",
				        "link": "cycle_ulster/the-death-of-cuchulainn.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Ulster-11-The-Death-of-Cuchulainn-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "The Sickbed Of Cuchulainn",
				        "link": "cycle_ulster/the-sickbed-of-cuchulainn.json",
						"audio": "",
						"done": false
				    },
				    {
				        "title": "The Son Of Cuchulainn - Death Of Connla",
				        "link": "cycle_ulster/the-son-of-cuchulainn.json",
						"audio": "",
						"done": false
				    }
				]
			},
			{
				"cycle": "Fenian",
				"image": "icon-cycle-fenian.png",
				"stories": [
				    {
				        "title": "Diarmuid And Grainne",
				        "link": "cycle_fenian/",
						"audio": "http://bardmythologies.com/wp-content/uploads/Fenian-1-Diarmuid-and-Gráinne-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Finn and the Fianna",
				        "link": "cycle_fenian/finn-and-the-fianna.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Fenian-2-Finn-and-the-Fianna-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Finn - Birth And Boyhood",
				        "link": "cycle_fenian/the-birth-and-boyhood-of-finn-mac-cumhaill.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Fenian-3-Finn-birth-and-boyhood-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Oisin In Tir na nOg",
				        "link": "cycle_fenian/oisin-in-tir-na-nog.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Fenian-4-Oisín-in-Tír-na-nÓg-192Kbps-CBR.mp3",
						"done": false
				    }
				]
			},
			{
				"cycle": "King",
				"image": "icon-cycle-kings.png",
				"stories": [
				    {
				        "title": "Conaire Mor",
				        "link": "cycle_kings/conaire-mor.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Kings-1-Conaire-Mor-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Cormac Mac Art",
				        "link": "cycle_kings/cormac-mac-airt.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Kings-2-Cormac-Mac-Art-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Labhraidh Loingseach",
				        "link": "cycle_kings/",
						"audio": "http://bardmythologies.com/wp-content/uploads/Kings-3-Labhraidh-Loingseach-192Kbps-CBR.mp3",
						"done": false
				    },
				    {
				        "title": "Mongan",
				        "link": "cycle_kings/mongan.json",
						"audio": "",
						"done": false
				    },
				    {
				        "title": "Niall Of The Nine Hostages",
				        "link": "cycle_kings/niall-of-the-nine-hostages.json",
						"audio": "http://bardmythologies.com/wp-content/uploads/Kings-5-Niall-of-the-Nine-Hostages-192Kbps-CBR.mp3",
						"done": false
				    }
				]
			}
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
				"cycle": "Mythological",
				"snippet": "Aengus Og son of the Daghda and Bionn (Goddess of the river Boyne) is the love god of Irish Mythology..."
			},
			{
				"name": "Allil",
				"link": "character_profiles/allill.json",
				"img": "cycle_mythological/allil.png",
				"cycle": "Mythological",
				"snippet": "Ailill was just a boy when he was brought to Meadhbh's court.  He grew to be a fine champion and Meadhbh..."
			},
			{
				"name": "Aoife",
				"link": "character_profiles/aoife.json",
				"img": "cycle_ulster/aoife.png",
				"cycle": "Ulster",
				"snippet": "Aoife (The Bright One) was the daughter of Ailill of Aran, foster daughter to Bodhbh Dearg the King of..."
			},
			{
				"name": "Balor",
				"link": "character_profiles/balor.json",
				"img": "cycle_mythological/balor_eye.png",
				"cycle": "Mythological",
				"snippet": "Balor was a powerful leader of the Formorians; a dark and demonic race that were the terrible oppressors..."
			},
			{
				"name": "Bodhbh Dearg",
				"link": "character_profiles/bodhbh-dearg.json",
				"img": "cycle_fenian/bodhbh_dearg.png",
				"cycle": "Fenian",
				"snippet": "Bodhbh Dearg (Bov The Red) resided in Sídh ar Feimhim ( Slievenamon Co Tipperary). He was the chosen King of..."
			},
			{
				"name": "Breas The Beautiful",
				"link": "character_profiles/breas.json",
				"img": "cycle_mythological/breas.png",
				"cycle": "Mythological",
				"snippet": "Breas became King of the Tuatha De Danann when Nuadu was wounded in battle against the Fir Bolgs..."
			},
			{
				"name": "Brigid",
				"link": "character_profiles/brigid.json",
				"img": "cycle_mythological/brigit.png",
				"cycle": "Mythological",
				"snippet": "The character of Brigid is extremely interesting in that she seems to have been both a pagan goddess and..."
			},
			{
				"name": "Cathbad",
				"link": "character_profiles/cathbad.json",
				"img": "cycle_ulster/cathbad.png",
				"cycle": "Ulster",
				"snippet": "The term druid means 'very knowledgeable' and druids were seen as members of an exclusive occupational class..."
			},
			{
				"name": "Conaire Mor",
				"link": "character_profiles/conaire-mor.json",
				"img": "cycle_king/conaire.png",
				"cycle": "King",
				"snippet": "When Eochaid married Etain, Etain produced one child, a daughter. The king was furious at this and ordered that..."
			}
		];

		return characters;
	}

	this.MythContent = function() {
		whyMyths = [
			{
				"name": "Why Myth",
				"items": [
					{
						"title": "The Idea of the Bard",
						"done": true
					},
					{
						"title": "Collective Stories",
						"done": false
					},
					{
						"title": "Multi-Valent Stories",
						"done": false
					},
					{
						"title": "Always About Today",
						"done": false
					},
					{
						"title": "Why Myth",
						"done": false
					}
				]
			}
		];

		return whyMyths;
	}

	this.JourneyContent = function() {
		journeys = [
			{
				"name": "Hero's Journey",
				"image": "icon-journey-hero.png",
				"items": [
					{
						"title": "Hero #1",
						"done": false
					},
					{
						"title": "Hero #2",
						"done": true
					},
					{
						"title": "Hero #3",
						"done": false
					},
					{
						"title": "Hero #4",
						"done": false
					},
					{
						"title": "Hero #5",
						"done": false
					}
				]
			},
			{
				"name": "Warrior's Journey",
				"image": "icon-journey-warrior.png",
				"items": [
					{
						"title": "Warrior #1",
						"done": false
					},
					{
						"title": "Warrior #2",
						"done": false
					},
					{
						"title": "Warrior #3",
						"done": false
					}
				]
			},
			{
				"name": "Lovers' Journey",
				"image": "icon-journey-lovers.png",
				"items": [
					{
						"title": "Lover #1",
						"done": false
					},
					{
						"title": "Lover #2",
						"done": false
					},
					{
						"title": "Lover #3",
						"done": false
					},
					{
						"title": "Lover #4",
						"done": false
					},
					{
						"title": "Lover #5",
						"done": false
					},
					{
						"title": "Lover #6",
						"done": false
					},
					{
						"title": "Lover #7",
						"done": false
					}
				]
			},
			{
				"name": "Sage's Journey",
				"image": "icon-journey-sage.png",
				"items": [
					{
						"title": "Sage #1",
						"done": false
					},
					{
						"title": "Sage #2",
						"done": false
					},
					{
						"title": "Sage #3",
						"done": false
					},
					{
						"title": "Sage #4",
						"done": false
					},
					{
						"title": "Sage #5",
						"done": false
					}
				]
			}
		];

		return journeys;
	}

})

/*
 * From: 
 * Author: 
 */
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