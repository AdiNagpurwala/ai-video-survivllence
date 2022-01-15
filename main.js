video="";

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);

    objectDetector=ml5.objectDetector('cocossd',modleLoaded);
    document.getElementById('status').innerHTML="Status : Object Detecting";
}
function modleLoaded(){
    console.log("Modle Loaded !")
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

}