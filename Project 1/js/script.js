let colors = [];
let colorOpacity = 60;
let bgColor;
let toColor;

let numLayers = 20;
let stars = [];
let centerX, centerY;
let starDirection = 1;

let moonSize, moonRadDist;
let moonR, moonG, moonB;
let moonAngle, moonSpeed;

function setup() {
    createCanvas(600, 400);
    background(100);

    // colors
    colors = [
        color(150, 0, 0),
        color(0, 130, 0),
        color(0, 0, 130),
        color(0, 0, 150),
        color(150, 150, 150),
    ];
    bgColor = color(0);
    toColor = color(random(30, 50), random(10, 15), random(80, 150));

    // the origin of the star rotation
    centerX = width / 2;
    centerY = height / 2 + 100;

    // stars
    for (let i = 0; i < numLayers; i++) {
        let numStars = (i + 1) * 10;
        let radius = 20 + i * 20;
        let speed = 1 + i * 0.1;
        for (let j = 0; j < numStars; j++) {
            let angle = map(j, 0, numStars, 0, TWO_PI);
            let x = centerX + radius * cos(angle);
            let y = centerY + radius * sin(angle);
            let star = {
                x,
                y,
                size: random(1, 3),
                speed,
                angle: random(TWO_PI),
                radDist: radius,
            };
            stars.push(star);
        }
    }
}

function draw() {

    //change background color
    bgColor = lerpColor(bgColor, toColor, 0.005);
    background(red(bgColor), green(bgColor), blue(bgColor), colorOpacity);

    //text
    fill(255);
    text("Press #0-5", 10, 30);
    text("Press the blank!", 10, 50);
    text("Click the sky!", 10, 70);
    text("u=UP d=DOWN r=RIGHT l=LEPT", 10, 90);

    // display stars
    for (let star of stars) {
        star.angle += starDirection * star.speed * 0.001; // ***
        star.x = centerX + star.radDist * cos(star.angle);
        star.y = centerY + star.radDist * sin(star.angle);
        fill(255);
        noStroke();
        circle(star.x, star.y, star.size);
    }

    // display moon
    moonAngle += moonSpeed * starDirection;
    let moonX = centerX + moonRadDist * cos(moonAngle);
    let moonY = centerY + moonRadDist * sin(moonAngle);

    noStroke();
    fill(moonR, moonG, moonB);
    circle(moonX, moonY, moonSize);
}

function keyPressed() {
    //change direction of the star and moon
    if (key === " ") {
        starDirection *= -1;
        //change the color of the sky (not work well);
    } else if (key == "1") {
        toColor = colors[0];
    } else if (key == "2") {
        toColor = colors[1];
    } else if (key == "3") {
        toColor = colors[2];
    } else if (key == "4") {
        toColor = colors[3];
    } else if (key == "5") {
        toColor = colors[4];
    } else if (key == "0") {
        toColor = color(random(255), random(255), random(255));
    }
    //change the center of the star
    else if (key == "u" || key == "U") {
        centerY -= 10;
    } else if (key == "d" || key == "D") {
        centerY += 10;
    } else if (key == "l" || key == "L") {
        centerX -= 10;
    } else if (key == "r" || key == "R") {
        centerX += 10;
    }
}

// create a moon
function mousePressed() {
    moonAngle = atan2(mouseY - centerY, mouseX - centerX);
    moonRadDist = dist(centerX, centerY, mouseX, mouseY);

    moonSize = random(10, 15);
    moonSpeed = random(0.005, 0.03);

    moonR = random(255);
    moonG = random(255);
    moonB = random(255);
}
