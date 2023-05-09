status="";
video = "";
function preload() {
    video = createVideo('');
    video.hide();
}
function setup(){
    canvas=createCanvas(680,580);
    canvas.center();
}
function draw(){
    image(video,0,0,680,580);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detectando Objetos"
}
function modelLoaded(){
    console.log("Modelo Carregado!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}6