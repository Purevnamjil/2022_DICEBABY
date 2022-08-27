//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчийн нийт оноо
var scores = [0,0];

//Нэг ээлжинд цуглуулсан оноо
var roundScore = 0;

//Шооны аль талаарай буусныг хадгалах 
var diceSide = Math.floor(Math.random()*6) + 1 ;

//Программ эхлэхэд бэлтгэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;



document.querySelector(".dice").style.display = "none";