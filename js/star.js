const TAU = Zdog.TAU;

//stars
var starlight = 'rgba(0, 132, 255,.30)';
var s2 = 'rgba(236, 69, 255,.30)';
var s3 = 'rgba(255, 255, 255,.40)';


function radiansToDegrees (_val) {  
    return _val * (Math.PI/180);
}

function makeZdogBezier (_path) {	
    let arr = [];
    arr[0] = {x: _path[0].x, y: _path[0].y};	
    for(let i = 1; i < _path.length; i++) {
        if(i % 3 == 0 ) {
            var key = "bezier";
            var obj = {};
            obj[key] = [
                {x: _path[i-2].x, y: _path[i-2].y},
                {x: _path[i-1].x, y: _path[i-1].y},
                {x: _path[i].x, y: _path[i].y}
            ];
            arr.push(obj);		
        }
    }
    return arr;
}
//size of artboard x h --> x y then /2 to get center
var offx = 83.79, offy = 81.16;


var lensBezier = MorphSVGPlugin.pathDataToBezier('M20.93,80.66c-1.26,0-2.48-0.55-3.33-1.52c-0.83-0.95-1.21-2.17-1.04-3.45l2.61-20.53c0.22-1.76-0.43-3.52-1.76-4.71L1.97,36.66c-1.28-1.14-1.77-2.81-1.31-4.46c0.46-1.65,1.74-2.83,3.42-3.15l20.34-3.86c1.75-0.33,3.22-1.5,3.93-3.13L36.7,3.13c0.71-1.62,2.26-2.63,4.03-2.63c1.63,0,3.07,0.85,3.85,2.28l9.96,18.15c0.85,1.56,2.42,2.6,4.19,2.77l20.59,2.08c1.7,0.17,3.08,1.23,3.68,2.84c0.6,1.6,0.26,3.31-0.92,4.55L67.9,48.26c-1.22,1.3-1.72,3.11-1.34,4.84l4.38,20.23c0.29,1.33-0.02,2.63-0.86,3.68c-0.84,1.04-2.13,1.67-3.43,1.67c-0.64,0-1.28-0.15-1.88-0.43l-18.72-8.83c-0.72-0.34-1.51-0.52-2.3-0.52c-0.95,0-1.89,0.25-2.72,0.73L23.13,80.05C22.44,80.45,21.7,80.66,20.93,80.66z', {
    offsetX: -offx/2,
    offsetY: -offy/2

})



var faceInfo = MorphSVGPlugin.pathDataToBezier("M49.34,42.23c0,4.69-3.8,8.48-8.48,8.48s-8.48-3.8-8.48-8.48C49.34,42.23,32.38,42.23,49.34,42.23z", {
    offsetX: -offx/2,
    offsetY: -offy/2
})

var starTrail = MorphSVGPlugin.pathDataToBezier("M17.79,82.49l-0.72-3.7c-0.34-1.77-0.4-3.57-0.17-5.36l2.27-17.84c0.2-1.6-0.39-3.2-1.6-4.27L2.14,37.53c-3.03-2.71-1.64-7.71,2.35-8.47l20.34-3.86c1.58-0.3,2.92-1.36,3.57-2.84l8.35-18.94c1.64-3.72,6.83-3.94,8.78-0.38l9.96,18.15c0.78,1.41,2.2,2.36,3.8,2.52l20.59,2.09c4.04,0.41,5.86,5.27,3.08,8.23L68.77,49.1c-1.1,1.17-1.56,2.82-1.22,4.39l2.24,10.32c1.41,6.53,1.4,13.28-0.05,19.8l-21.26,95.96c-1.42,6.42-10.61,6.29-11.86-0.16L17.79,82.49z", {
    offsetX: -84.79/2,
    offsetY: -offy/2
})



let fillo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas-star',
    dragRotate: true,
    resize: 'fullscreen',
    zoom: 2,
    centered: true,
});
let scene = new Zdog.Anchor({
    addTo: fillo,
    translate: {x: 0, y: -100},
});




var mainGroup = new Zdog.Group({
    addTo: scene,
});



let star = new Zdog.Shape({
    addTo: mainGroup,
    path:  makeZdogBezier(lensBezier) ,
    closed: true,
    stroke: 25,
    fill: true,
    color: '#FEC31C'
});


let star2 = new Zdog.Shape({
    addTo: mainGroup,
    path:  makeZdogBezier(starTrail) ,
    closed: true,
    color: 'rgba(255,255,255,.25)',
    stroke: 55,
    fill: false,
});


var blu = "#271F30"

var ex = offx/2,
    ey = offy;
let smile = new Zdog.Ellipse({
    addTo: mainGroup,
    diameter: 20,
    quarters: 2, // semi-circle
    rotate: { z: TAU/4 },
    color: blu,
    stroke: 10,
    backface: false,
});

let eyeL = new Zdog.Shape({
    addTo: mainGroup,
    stroke: 8,
    color: blu,
    translate: { x: 5, y: -10, z: 0 },
    backface: false,
});
let eyeR = new Zdog.Shape({
    addTo: mainGroup,
    stroke: 8,
    color: blu,
    translate: { x: -5, y: -10, z: 0 },
    backface: false,
});




//STARS

let stardustA = new Zdog.Anchor({
    addTo: fillo,
    rotate: { y: TAU/4},
})

let stardustG = new Zdog.Group({
    addTo: stardustA,
})

let starDust = new Zdog.Shape({
    addTo: stardustG,
    stroke: 10,
    color: starlight,
    fill: true,
    visible: false,
});
//random # generator for position
function getRandomInt(max) {
    var rando = Math.floor(Math.random() * Math.floor(max));
    var decider = Math.floor(Math.random() * Math.floor(2));

    if (decider == 0){
        return rando;
    }else{
        return (rando ) * -1;
    }
};

//Star generator

function getRandomIntX(max) {
    var rando = Math.floor(Math.random() * Math.floor(max));
    var decider = Math.floor(Math.random() * Math.floor(2));

    if (decider == 0){
        return rando + 100;
    }else{
        return (rando + 100) * -1;
    }
};

for (i = 0; i < 50; i++) {
    starDust.copy({
        stroke: Math.floor(Math.random() * Math.floor(12)),
        visible: true,
        color: s3,
        translate:{ x: getRandomInt(400), y: getRandomInt(300), z: getRandomInt(400)},
    });
};
for (i = 0; i < 50; i++) {
    starDust.copy({
        stroke: Math.floor(Math.random() * Math.floor(5)),
        visible: true,
        color: s3,
        //  backside: turea,
        translate:{ x: getRandomInt(400), y: getRandomInt(300), z: getRandomInt(400)},
    });
};





function animate() {
    // rotate fillo each frame

    mainGroup.rotate.x += 0.03;
    mainGroup.rotate.y += 0.03;
    scene.rotate.x -=0.03;
    stardustA.rotate.y += 0.01;
    stardustG.rotate.x += 0.01;
    fillo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
}




// start animation
animate();




//star.renderGraphCanvas( ctx );
fillo.updateRenderGraph();