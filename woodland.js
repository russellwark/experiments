// Woodland Whack JS
// (C) 2011 Russell Wark / Stoatware
// array for creatures

var creatures = new Array();

creatures[0] = "stoat";
creatures[1] = "badger";
creatures[2] = "mole";
creatures[3] = "hedgehog";
creatures[4] = "sparrow";
creatures[5] = "deer";
creatures[6] = "fox";

// display creature and animate

function showStoat() {
  $("#stoat").animate({top: '-=280'},1000).delay(500).animate({top: '+=340'},1000, function(){$('#stoat').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/stoat_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showSparrow() {
	$("#sparrow").animate({left: '+=740'},3000).delay(500, function(){$('#sparrow').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showBadger() {
	$("#badger").animate({left: '-=1000'},2500).delay(500, function(){$('#badger').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showMole() {
	$("#mole").animate({left: '+=740'},3000).delay(500, function(){$('#mole').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showHedgehog() {
	$("#hedgehog").animate({left: '+=740'},3000).delay(500, function(){$('#hedgehog').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showDeer() {
	$("#deer").animate({left: '-=850'},2000).delay(500, function(){$('#deer').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

function showFox() {
	$("#fox").animate({left: '+=740'},3000).delay(500, function(){$('#fox').removeAttr('style'); });
	// sound
	//$('embed').remove();
    //$('body').append('<embed src="/sounds/sparrow_appear.wav" autostart="true" hidden="true" loop="false">');
}

$(document).ready(function() {	

	$("#stoat").click(function() {
		theScore +=10;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
		
	$("#sparrow").click(function() {
		theScore +=50;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
	
	$("#badger").click(function() {
		theScore +=10;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
	
	$("#mole").click(function() {
		theScore +=50;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
	
	$("#hedgehog").click(function() {
		theScore +=20;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
	
	$("#deer").click(function() {
		theScore +=50;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});
	
	$("#fox").click(function() {
		theScore +=100;
		numberClicked++;
		$(".scorenumber").html(theScore);
		Cufon.refresh();
	});

});

// random creature handler 

function showCreature(id) {
	switch(id) {
		case 0: 
			showStoat();
			break;
		case 1:
			showSparrow();
			break;
		case 2:
			showBadger();
			break;
		case 3:
			showDeer();
			break;
		case 4: 
			showHedgehog();
			break;
		case 5:
			showMole();
			break;
		case 6:
			showFox();
			break;
	}
}

function doSpawn() {
		var randomnumber=Math.floor(Math.random()*randomSeed);
		var respawnSpeed=Math.floor(Math.random()*maxRespawn)+minRespawn;
		totalTimeout = totalTimeout + respawnSpeed;
		
		setTimeout(function() {
			$("#trace").html("Respawn speed: "+respawnSpeed+", creature number: "+randomnumber);
			showCreature(randomnumber);
			numberShown++;
			//x++;				
		}, totalTimeout);	
}

// score

var theScore = 0;

// number of missed creatures

var numberMissed = 0;

// animation speed - increases as score goes up

var animSpeed = 30;

// how long creatures stay on screen for

var waitSpeed = 300;

// random seed (is incremented as game progresses)

var randomSeed = 4;

// end game flag

// minimum respawn speed

var minRespawn = 1000;

// max respawn speed

var maxRespawn = 3000;

var totalTimeout = 0;

var numberShown = 0;

var numberClicked = 0;

var numberOfLives = 5;

var endGame = false;

function endGame() {
	endGame = true;
}

function doGameOver() {
	$("#gameover").fadeIn('slow');	
}

function runGame() {
	// logic:
	// creatures appar in random order and at random intervals based on the respawn speed
	// player taps creatures to score, creature vanishes, next creature appears
	// creature speed goes up after every 10 creatures
	// other creatures are unlocked after 20, 40 and 60 points
	
	// creatures divs are initialised in the HTML
	
	// main loop
	
	if(!endGame) {

	// next creature to display

	
	for (x=1; x < 50; x++) {
		doSpawn();	
	}
	//endGame();
	
		
	//} while (!endGame);

	} else {
		doGameOver();
	}
}

