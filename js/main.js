var maqam = [
  {
    name: "Bayyati",
    file: 'audio/bayyati_mg.m4a',
    pointValue: 5
  }, {
    name: "Nahawand",
    file: 'audio/nahawand_mg.m4a',
    pointValue: 5
  }, {
    name:"Saba",
    file: 'audio/saba_mg.m4a',
    pointValue: 5
  }, {
    name: "Huzam",
    file: 'audio/huzam_mg.m4a',
    pointValue: 5
  }, {
    name: "Hijaz",
    file: 'audio/hijaz_mg.m4a',
    pointValue: 5,
  }, {
    name: "Ajam",
    file: 'audio/ajam_mg.m4a',
    pointValue: 5
  }, {
    name: "Bastanikar",
    file: 'audio/bastanikar_mg.m4a',
    pointValue: 5
  }, {
    name: "Nakriz",
    file: 'audio/nakriz_mg.m4a',
    pointValue: 5,
  }, {
    name: "Iraq",
    file: 'audio/iraq_mg.m4a',
    pointValue: 5
  }, {
    name: "Suznak",
    file: 'audio/suznak_mg.m4a',
    pointValue: 5
  }, {
    name: "Rast",
    file: 'audio/rast_mg.m4a',
    pointValue: 5
  }, {
    name: "Shawq Afza",
    file: 'audio/nazgul_screech.mp3',
    pointValue: 5
  }, {
    name: "Lami",
    file: 'audio/lami_mg.m4a',
    pointValue: 5
  }, {
    name: "Kurd",
    file: 'audio/kurd_mg.m4a',
    pointValue: 5
  }, {
    name: "Ushaq Masri",
    file: 'audio/ushaq_masri_mg.m4a',
    pointValue: 5
  }, {
    name: "Nawa Athar",
    file: 'audio/nawa_athar_mg.m4a',
    pointValue: 5
  }
];

var player = "Maqam Master";
var attempt;
var counter;
var randomNumber;
var answered = false;


$('#restart').on('click', startGame);

$('#play').on('click', play);

// choose a box and check to see if correct, also add to attempt and counter;
$('#board').on('click', '.box', function(evt){
  console.log(evt.target)
  $(evt.target).addClass('selected')
  var idx = parseInt(this.id.substr(3));
  if (!answered) attempt++;
  if (idx === randomNumber && !answered) {
    answered = true;
    $('.box').removeClass('selected');
    $('#message').html("That's Correct!");
    counter++;
    $('#play').html("Play");
  } else if (answered) {
    $('#message').html("You've already answered!");
  } else {
  $('#message').html("Oops! Guess Again!");
  }
  render();
});

function startGame() {
  counter = 0;
  attempt = 0;
  $('#play').html("Play");
  $('.box').removeClass('selected');
  render();
};

function render() {
  // var pending = false
  $('#attempts').html(attempt);
  $('#corscore').html(counter);

  //  code for win logic when counter reaches certain number.
  if(counter > 5) {
    $("#message").html("Wow you're doing great!")
  } if (counter > 10) {
    $("#message").html("You are a " + player);
  }
  else {
    $('#message').html("Let's go " + player);
  }
};



// generates random maqam(scale)
function generateNumber() {
  randomNumber = Math.floor(Math.random() * maqam.length);
  answered = false;
};

function play() {
  startGame();
  if($('#play').html() === "Replay") {
    $('#playScale').attr('src', maqam[randomNumber].file);
    $('#playScale')[0].play();
  } else {
    generateNumber();
    //play audio
    $('#playScale').attr('src', maqam[randomNumber].file);
    $('#playScale')[0].play();
    $('#play').toggleClass('.replay').html("Replay");
    // $('.box').toggleClass('.boxy');
  }
}

 // restart game
function restartGame() {
  $('#restart').on('click', startGame);
   startGame();
};



// put inside function that adds and removes the class of the div
  // // function checkScale() {
  // // if (bayyati !== nameScale.name){
  // //   counter +=1;
  // //  // return bayyati;
  // //  // console.log(bayyati);
  // //  // } else {
  // //   console.log(bayyati);
  //  };
  //   return "Congrats", correct++;
  // } else {
  //   incorrect++;
  // checkScale();
 // };

 // need a function or way to replay same scale




// while(????? !== )




