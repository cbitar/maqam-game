var maqam = ["Bayyati","Nahawand","Saba","Huzam",
             "Hijaz","Ajam","Nakriz","Bastanikar",
             "Rast","Sikah","Shawq Afza","Iraq",
             "Lami","Kurd","Hijaz Kar","Nawa Athar"];
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


function generateNumber() {
  var randomNumber = Math.floor(Math.random() * maqam.length);
  var nameScale = maqam[randomNumber];
  console.log(nameScale);
  $('#message').html(nameScale);
};


$('#play').on('click', generateNumber);

function checkScale() {
  // debugger;
  var correct = 0;
  var incorrect = 0;
  if(maqam[i] === maqam[0]){
   return bayyati;
   console.log(bayyati);
   } else {
    console.log("sorry try again");
   }
  //   return "Congrats", correct++;
  // } else {
  //   incorrect++;
  // checkScale();
 };

// $('#box0').on('click', function(){

// });
document.querySelector("#box0").addEventListener("click", checkScale);
document.querySelector("#box1").addEventListener("click", checkScale);
document.querySelector("#box2").addEventListener("click", checkScale);
document.querySelector("#box3").addEventListener("click", checkScale);
document.querySelector("#box4").addEventListener("click", checkScale);
document.querySelector("#box5").addEventListener("click", checkScale);
document.querySelector("#box6").addEventListener("click", checkScale);
document.querySelector("#box7").addEventListener("click", checkScale);
document.querySelector("#box8").addEventListener("click", checkScale);
document.querySelector("#box9").addEventListener("click", checkScale);
document.querySelector("#box10").addEventListener("click", checkScale);
document.querySelector("#box11").addEventListener("click", checkScale);
document.querySelector("#box12").addEventListener("click", checkScale);
document.querySelector("#box13").addEventListener("click", checkScale);
document.querySelector("#box14").addEventListener("click", checkScale);
document.querySelector("#box15").addEventListener("click", checkScale);






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


