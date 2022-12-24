var character = document.getElementById("character");
var bullet = document.getElementById("bullet");
var dead = document.getElementById("dead");
var restart = document.getElementById("restart");
var start = document.getElementById("start");

function jump(){
    if(character.classList != "up")
        character.classList.add("up");
    setTimeout(function(){
        character.classList.remove("up"); 
    },800)
}

var checkDead = setInterval(function(){

    var characterTop=parseInt
    ( window.getComputedStyle(character)
    .getPropertyValue("top"));

    var bulletleft=parseInt
    ( window.getComputedStyle(bullet)
    .getPropertyValue("left"));

    if(bulletleft<80 && bulletleft>0  && characterTop>120){
        bullet.style.animation = "none";
        bullet.style.display = "none";
        character.style.display= "none";
        dead.style.display = "block";
        restart.style.display = "block";
        // alert("you lose .");
    }
},100); 

    function Restart(){
        setTimeout(function(){
            location.reload();
        },300);
        
    }

    function StartGame(){
        setTimeout(function(){
            start.style.top="300px";
            bullet.style.animation = "shot 1.2s infinite linear ";
        },500);
        setTimeout(function(){
            bullet.style.height="10px";
            bullet.style.width="30px";
            bullet.style.background="red";
        },5000);

    };



 