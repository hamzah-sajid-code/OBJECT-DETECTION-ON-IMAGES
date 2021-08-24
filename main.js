var img = '';
var status = '';
var arrayOfResults = [];


var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


function preload() {
    img = loadImage('https://i.postimg.cc/JzmMXB3X/car.jpg');
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}

function modelLoaded() {
    console.log('Successfully Loaded Coco SSD');
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    console.log('HI')
    // if (results.length > 0) {
    console.log(results);
    arrayOfResults = results;
    console.log(arrayOfResults)
    // } else if (error) {
    // console.log(error)
    // }
}
colorindex = Math.floor(Math.random()*CSS_COLOR_NAMES.length);
console.log(CSS_COLOR_NAMES[colorindex])

function draw() {
    image(img, 0, 0, 640, 420);
    for (i = 0; arrayOfResults.length > i; i++) {
        // for (j = 0; CSS_COLOR_NAMES.length > j; j++) {
        status = true;
        document.getElementById('status').innerHTML = "Status: Detected The Object";
        fill(CSS_COLOR_NAMES[colorindex]);
        stroke(CSS_COLOR_NAMES[colorindex]);
        strokeWeight(1)
        textSize(15)
        percent = floor(arrayOfResults[i].confidence * 100);
        text(arrayOfResults[i].label + " " + percent + "%", arrayOfResults[i].x + 5, arrayOfResults[i].x, arrayOfResults[i].y - 5)
        noFill();
        rect(arrayOfResults[i].x, arrayOfResults[i].y, arrayOfResults[i].width, arrayOfResults[i].height)
    // }
    }
}