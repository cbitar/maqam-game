var maqam = [
  {
    name: "Bayyati",
    file: 'sharonjones.mp3',
    pointValue: 5
  }, {
    name: "Nahawand",
    file: 'nazgul_screech.mp3',
    pointValue: 5
  }, {
    name:"Saba",
    file: '',
    pointValue: 5
  }, {
    name: "Huzam",
    file: '',
    pointValue: 5
  }, {
    name: "Hijaz",
    file: '',
    pointValue: 5,
  }, {
    name: "Ajam",
    file: '',
    pointValue: 5
  }, {
    name: "Bastanikar",
    file: '',
    pointValue: 5
  }, {
    name: "Nakriz",
    file: '',
    pointValue: 5,
  }, {
    name: "Iraq",
    file: '',
    pointValue: 5
  }, {
    name: "Sikah",
    file: '',
    pointValue: 5
  }, {
    name: "Rast",
    file: '',
    pointValue: 5
  }, {
    name: "Shawq Afza",
    file: '',
    pointValue: 5
  }, {
    name: "Lami",
    file: '',
    pointValue: 5
  }, {
    name: "Kurd",
    file: '',
    pointValue: 5
  }, {
    name: "Hijaz Kar",
    file: '',
    pointValue: 5
  }, {
    name: "Nawa Athar",
    file: '',
    pointValue: 5
  }
];
var won = false;
var player = "Maqam Master";
var attempt = 0;
var counter = 0;
var i = 0;
var bayyati = maqam[0];
var nahawand = maqam[1];
var saba = maqam[2];
var huzam = maqam[3];
var hijaz = maqam[4];
var ajam = maqam[5];
var nakriz = maqam[6];
var bastanikar = maqam[7];
var rast = maqam[8];
var sikah = maqam[9];
var shawqAfza = maqam[10];
var iraq = maqam[11];
var lami = maqam[12];
var kurd = maqam[13];
var hijazKar = maqam[14];
var nawaAthar = maqam[15];

var randomNumber = Math.floor(Math.random() * maqam.length);
 var nameScale = maqam[randomNumber];



var startGame = function() {
  won = false;
  player = "Maqam Master"
};

// choose a box and check to see if correct, also add to attempt and counter;

$('#board').on('click', '.box', function(evt){
  var idx = parseInt(this.id.substr(3));
  attempt++;
  $('#attempts').html(attempt)
  console.log(maqam[idx].name)
  if(maqam[idx].name === nameScale.name) {
    counter++;
    console.log("Nice");
    $('#corscore').html(counter)
  } else {
    console.log("try again");
  }

});

// generates random maqam(scale)


function generateNumber() {
   randomNumber = Math.floor(Math.random() * maqam.length);
   nameScale = maqam[randomNumber];
  console.log(nameScale.name);
  $('#message').html(nameScale.name);
};


$('#play').on('click', generateNumber);

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
 $('#restart').on('click', function restartGame() {
  startGame();
 });

// while(????? !== )

 // map and match method??? ask phil or jim



