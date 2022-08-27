//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчийн нийт оноо
var scores = [0,0];

//Нэг ээлжинд цуглуулсан оноо
var roundScore = 0;

//Шооны аль талаарай буусныг хадгалах 


//Программ эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//Шоог арилгах
document.querySelector(".dice").style.display = "none";

//dom listener
var domDice = document.querySelector(".dice");


// Товчны эвэнт листенер
document.querySelector(".btn-roll").addEventListener( "click", function ()
{
var diceSide = Math.floor(Math.random()*6) + 1 ;

domDice.style.display = "block";
domDice.src = "dice-" + diceSide + ".png";


}
);


