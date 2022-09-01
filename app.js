//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчийн нийт оноо
var scores = [0,0];

//Нэг ээлжинд цуглуулсан оноо
var roundScore = 0;

// Alert Text хадгалах
var alertText;

//Программ эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//Шоог арилгах
document.querySelector(".dice").style.display = "none";

// ДАВТАН АШИГЛАХ ФУНКЦУУД
// Ээлж солих функц
function changeTurn(){
    if(activePlayer === 1){
        activePlayer = 0;
        activePlayer0();
    } else{
        activePlayer = 1;
        activePlayer1();
    }
}

// Оноо 0 болгох.
function resetCurrentScore(){
    roundScore = 0;
    document.getElementById("current-"+activePlayer).textContent = roundScore;
}

// Тоглоом эхлүүлэх
function newGame (){
    scores[0]= 0;
    scores[1]= 0;
    roundScore = 0;
    activePlayer = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    activePlayer0();
    resetCurrentScore();
    alert(alertText);
}

// Идвэхтэй тоглогчийн стайл өөрчлөх
function activePlayer0(){
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

function activePlayer1(){
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
}


//dom listener
var domDice = document.querySelector(".dice");


// Товчны эвэнт листенер
document.querySelector(".btn-roll").addEventListener( "click", function ()
{
// Шооны тоог санамсаргүйгээр гаргаж ирнэ.
var diceSide = Math.floor(Math.random()*6) + 1 ;

// Шооны зураг гаргаж ирнэ.
domDice.style.display = "block";
domDice.src = "dice-" + diceSide + ".png";

// Идвэхтэй тоглогчийн style

// Буусан тоо нь нэгээс ялгаатай бол тоог нэмнэ.
    if(diceSide !== 1){
        roundScore = roundScore + diceSide;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else{
        resetCurrentScore();
        changeTurn();
        
        
    }   

}
);

// Шоог хадгалах
    document.querySelector(".btn-hold").addEventListener("click",
    function(){
        scores[activePlayer] = scores[activePlayer]+ roundScore;
        document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
        
        //Ялагч тодруулах
        if(scores[activePlayer] >= 100){
            winner = activePlayer + 1;
            alertText = "Тоглогч "+ winner + " ялагч боллоо боллоо.";
            newGame();
        }
        
        resetCurrentScore();
        changeTurn();
        
    } );

// Шинэ тоглоом эхлүүлэх
    document.querySelector(".btn-new").addEventListener("click", function(){
        alertText = "Шинэ тоглоом эхлэв";
        newGame();
    });





    
