//basic set up
const TAU = Zdog.TAU;
let isSpinning = true;
//sun colors
var flame = "#f15025";
var gamboge = "#FF9505";
//sun main color
var urobilin = "#FF9505";
var urobilinRGB = 'rgba(	255, 149, 5,.25)';

//earth

var greenBlue = "#25BC71";
var midnightBlue = "#12633B";
var day = greenBlue, 
    night = midnightBlue;
//stars
var starlight = 'rgba(0, 132, 255,.30)';
var s2 = 'rgba(236, 69, 255,.30)';
var s3 = 'rgba(255, 255, 255,.40)';

/** ILLO and Set up*/

let illo = new Zdog.Illustration({
  // set canvas with selector
    element: '.zdog-canvas',
    dragRotate: true,
    resize: 'fullscreen',
    zoom: 2,
    
     onDragStart: function() {
    isSpinning = false;
  },
});
/** EYES */
var eyeGroup = new Zdog.Group({
  addTo: illo,
});

let eyeAnchor = new Zdog.Anchor({
  addTo: eyeGroup,
  translate: { z: 10 },
});

var ey = 15;//location of eyes
let eye = new Zdog.Ellipse({
 // addTo: sun,
    addTo: eyeAnchor,
  diameter: 10,
  quarters: 2, // semi-circle
  translate: { x: -ey, y: 1, z: 0 },
  // rotate semi-circle to point up
  rotate: { z: -TAU/4 },
  color: flame,
  stroke: 5,
  // hide when front-side is facing back
  backface: false,
});
let eyeL = new Zdog.Ellipse({
 // addTo: sun,
    addTo: eyeAnchor,
  diameter: 10,
  quarters: 2, // semi-circle
  translate: { x: ey, y: 1, z: 0 },
  // rotate semi-circle to point up
  rotate: { z: -TAU/4 },
  color: flame,
  stroke: 5,
  // hide when front-side is facing back
  backface: false,
   // fill: true,
});

/** SUN */
var sunny = new Zdog.Group({
  addTo: illo,
});
let sun = new Zdog.Ellipse({
  addTo: sunny,
  diameter: 80,
  stroke: 20,
  color: urobilin,
    fill: true,
});

//outer glow
sun.copy({
    color: urobilinRGB,
    stroke: 60
})
sun.copy({
    color: urobilinRGB,
    stroke: 80
})

//sun beams and glow
var b = 50;
let beam = new Zdog.Shape({
    addTo: sun,
    stroke: 40,
    color: urobilinRGB,
    fill: true,
    translate: { x: b },
});


beam.copy({
  translate: { x: -b },
});
beam.copy({
  translate: { y: -b },
});
beam.copy({
  translate: { y: b },
});
beam.copy({
  translate: {x: b/1.5, y: b/1.5 },
});
beam.copy({
  translate: {x: -b/1.5, y: -b/1.5 },
});

beam.copy({
  translate: {x: -b/1.5, y: b/1.5 },
});
beam.copy({
  translate: {x: b/1.5, y: -b/1.5 },
});

//corona ( non transparent)
let corona = new Zdog.Shape({
  addTo: sun,
  stroke: 25,
  color: urobilin,
  fill: true,
    translate: { x: b },
});

corona.copy({
  translate: { x: -b },
});
corona.copy({
  translate: { y: -b },
});
corona.copy({
  translate: { y: b },
});
corona.copy({
  translate: {x: b/1.5, y: b/1.5 },
});
corona.copy({
  translate: {x: -b/1.5, y: -b/1.5 },
});
corona.copy({
  translate: {x: -b/1.5, y: b/1.5 },
});
corona.copy({
  translate: {x: b/1.5, y: -b/1.5 },
});


/** EARTH AND MOON Objects */

let orbitAnchor = new Zdog.Anchor({
    addTo: illo,
})
let orbit = new Zdog.Group({
    addTo: orbitAnchor,
    translate: { x: 120 , y: 00 },
})

let earth = new Zdog.Shape({
    addTo: orbit,
    stroke: 30,
    color: day,
});

let shadow = new Zdog.Hemisphere({
    addTo: earth,
    diameter: 30,
    rotate: { y: -Zdog.TAU/4 },
    stroke: false,
    color: night,
    backface: false,

});

let moon = new Zdog.Shape({
    addTo: earth,
    stroke: 10,
    color: "#c7bce8",
    translate: {x: 30, y: - 20},
})

let darkmoon = new Zdog.Hemisphere({
    addTo: moon,
    diameter: 10,
    rotate: { y: -Zdog.TAU/4 },
    stroke: false,
    color: '#3e3eb5',
    backface: false,
});

//STARS

let stardustA = new Zdog.Anchor({
    addTo: illo,
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
        return rando * -1;
    }
};

//Star generator
for (i = 0; i < 50; i++) {
    starDust.copy({
         stroke: Math.floor(Math.random() * Math.floor(12)),
        visible: true,
        translate:{ x: getRandomInt(400), y: getRandomInt(300), z: getRandomInt(400)},
    });
};
for (i = 0; i < 50; i++) {
    starDust.copy({
         stroke: Math.floor(Math.random() * Math.floor(10)),
        visible: true,
        color: s2,
        translate:{ x: getRandomInt(400), y: getRandomInt(300), z: getRandomInt(400)},
    });
};

for (i = 0; i < 30; i++) {
    starDust.copy({
         stroke: Math.floor(Math.random() * Math.floor(7)),
        visible: true,
        color: s3,
        translate:{ x: getRandomInt(400), y: getRandomInt(300), z: getRandomInt(400)},
    });
};

function animate() {
    if ( isSpinning ) {
    sun.rotate.z += 0.02;
    orbitAnchor.rotate.y += 0.03;
    stardustA.rotate.y -= 0.005;
        
    }
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
    
}
// start animation
animate();
// update & render
///illo.updateRenderGraph();


