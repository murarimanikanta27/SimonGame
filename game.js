var gamePattern=[];
var gameColors=["green","yellow","red","blue"];
var level=0;
var userPattern=[];
var start=false;
$(document).on("keypress",function()
{
    if(start==false){
        nextSequence();
        start=true;
    }
    
})
$(".btn").on("click",function()
{
var usercolor=$(this).attr("id");
  userPattern.push(usercolor);
  check(userPattern.length-1);
  colorAnimate(usercolor);
  sound(usercolor);
})
function nextSequence()
{userPattern=[];
    level++;
    $("#level-title").text("Level "+ level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomcolor=gameColors[randomNumber];
    gamePattern.push(randomcolor);
    colorAnimate(randomcolor);
    sound(randomcolor);
}

function check(userlength)
{
    if(userPattern[userlength]===gamePattern[userlength]){
      if(userPattern.length===gamePattern.length)
      {
        setTimeout(function () {
            nextSequence();
          }, 1000);
      }
    }
    else{
        sound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over press any key to restart");
        setTimeout(function()
    {
     $("body").removeClass("game-over");
    },200)
    startfromfirst();
    }
}
function sound(colour)
{
  var audio=new Audio("./sounds/"+colour+".mp3");
  audio.play();
}
function colorAnimate(randomcolor){
    $("#"+randomcolor).addClass("pressed");
    setTimeout(function()
{
$("#"+randomcolor).removeClass("pressed");
},100)
}
function startfromfirst(){
start=false;
gamePattern=[];
level=0;
}