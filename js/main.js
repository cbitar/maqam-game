var maqam = [
  {
    name: "Bayyati",
    file: 'audio/filename.mp3',
    pointValue: 5
  }, {
    name: "Nahawand",
    file: '',
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
var i = maqam;
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


// var scaleSounds = document.createElement("Audio");

var startGame = function() {
  won = false;
  player = "Maqam Master"
  var incorrect = 0;
  var correct = 0;
};



$('#board').on('click', '.box', function(evt){
  var idx = parseInt(this.id.substr(3));

  console.log(maqam[idx].name)
});

function generateNumber() {
  var randomNumber = Math.floor(Math.random() * maqam.length);
  var nameScale = maqam[randomNumber];
  console.log(nameScale);
  $('#message').html(nameScale);
  function checkScale() {
  // debugger;
  var correct = 0;
  var incorrect = 0;
  if(maqam[i] === randomNumber){
   // return bayyati;
   // console.log(bayyati);
   // } else {
    console.log("sorry try again");
   };
};


$('#play').on('click', generateNumber);

  //   return "Congrats", correct++;
  // } else {
  //   incorrect++;
  // checkScale();
 };

 // map and match method??? ask phil or jim

// $('#box0').on('click', function(){

// });






// function shuffleMaqamat(scales) {
//     for (var i = scales.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = scales[i];
//         scales[i] = scales[j];
//         scales[j] = temp;
//     }
//     return scales;
// }

// var $('hi') = $("<h1>");


