var x = document.getElementById("myAudio");
song = "";
img = "";
function preload(){
    img = loadImage("mummy.jpg");
    song = loadSound("Teri Ungli Pakad Ke Chala - Laadla 320 Kbps.mp3");
}
function setup(){
    canvas = createCanvas(450,600);
    canvas.center();
}
function draw(){
    image(img,0,0,450,600)
}
function ok(){
x.play()
}