var img = '';
var status = '';
var arrayOfResults = [];

function preload() {
    img = loadImage('https://i.postimg.cc/wjz2wBrD/apple.jpg');
}
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}

function modelLoaded() {
    console.log('Successfully Loaded Coco SSD');
    status = true;
    document.getElementById('status').innerHTML = "Status: Detected The Object";
    objectDetector.detect(img, gotResults);
}
function draw(){
    image(img, 0, 0, 640, 420);
}

function gotResults(results) {
    console.log(results);
    arrayOfResults = results;
    console.log(arrayOfResults)
}