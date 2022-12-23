song1 = "";
song2 = "";
function preload() {
    song1 = loadSound('lalisa.mp3'); 
    song2 = loadSound('pink_venom.mp3');
}
function setup() {
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 550);
}
function play() {
    song1.play();
    song2.play();
}
