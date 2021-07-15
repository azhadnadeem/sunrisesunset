const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    Backgroundchange();
}

function setup()
{

    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
  background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
  // background(backgroundImg);
}

async function Backgroundchange(){

    // write code to fetch time from API
    var respons=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")

    //change the data in JSON format
    var responsjson=await respons.json()

    // write code slice the datetime
    var hour=responsjson.datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=06  && hour<=07){
        bg="sunrise1.png"
    } else if(hour>=07  && hour<=08){
      bg="sunrise2.png"
    }else if(hour>=08 && hour<=09){
        bg="sunrise3.png"
    }else if(hour>=09 && hour<=10){
        bg="sunrise4.png"
    }else if(hour>=10 && hour<=11){
        bg="sunrise5.png"
    }else if (hour>=11 && hour<=12){
        bg="sunrise6.png"
    }else if(hour>=16 && hour<=17){
        bg="sunset7.png"
    }else if(hour>=17 && hour<=18){
        bg="sunset8.png"
    }else if(hour>=18 && hour<=19){
        bg="sunset9.png"
    }else if(hour>=18 && hour<=19){
        bg="sunset10.png"
    }else if(hour>=19 && hour<=20){
        bg="sunset11.png"
    }else {
        bg="sunset12.png"
    }
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
