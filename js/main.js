var maqam = [
  {
    name: "Bayyati",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Nahawand",
    file: 'audio/nazgul_screech.mp3',
    pointValue: 5
  }, {
    name:"Saba",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Huzam",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Hijaz",
    file: 'audio/sharonjones.mp3',
    pointValue: 5,
  }, {
    name: "Ajam",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Bastanikar",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Nakriz",
    file: 'audio/sharonjones.mp3',
    pointValue: 5,
  }, {
    name: "Iraq",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Sikah",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Rast",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Shawq Afza",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Lami",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Kurd",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Hijaz Kar",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Nawa Athar",
    file: 'audio/sharonjones.mp3',
    pointValue: 5
  }
];

var player = "Maqam Master";
var attempt;
var counter;
var randomNumber;


$('#restart').on('click', startGame);

$('#play').on('click', play);

// choose a box and check to see if correct, also add to attempt and counter;
$('#board').on('click', '.box', function(evt){
  var idx = parseInt(this.id.substr(3));
  attempt++;
  if (idx === randomNumber) counter++;
  render();
});

function startGame() {
  counter = 0;
  attempt = 0;
  render();
};

function render() {
  $('#attempts').html(attempt);
  $('#corscore').html(counter);
  //  code for win logic when counter reaches certain number.
  if(counter > 5) {
    $("#message").html("Wow you're doing great!")
  } else {
    $('#message').html("Let's go " + player);
  }
}

// generates random maqam(scale)
function generateNumber() {
  randomNumber = Math.floor(Math.random() * maqam.length);
};

function play() {
  generateNumber();
  //play audio
  $('#playScale').attr('src', maqam[randomNumber].file);
  $('#playScale')[0].play();
}


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



 // restart game
 $('#restart').on('click', startGame);

 startGame();

// while(????? !== )

 // map and match method??? ask phil or jim



