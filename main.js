img="";
status="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}


function setup()
{
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Object";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#000000");
    text("Dog", 45, 75);
    noFill();
    stroke("#000000");
    rect(30, 60, 450, 350);
    fill("#7402e6");
    text("Cat", 320, 120);
   noFill();
   stroke("#7402e6");
   rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("ModelLoaded!");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult()
{
    if (error){
        console.log(error);
    }

    console.log(results);
}