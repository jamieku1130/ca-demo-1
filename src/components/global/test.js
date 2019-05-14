var $bk = $("#background"),
  $smCube = $(".sm-cube"),
  $iPop = $(".initial-pop"),
  $iInit = $(".accents-initial line"),
  $ring = $("#ring"),
  $ringP = $("#ring path"),
  $tri = $(".triangle"),
  $triP = $(".triangle polygon"),
  $dashed = $("#dashed circle");

TweenMax.set($ring, {
  visibility: "visible",
  opacity: 0
});

TweenMax.set($smCube, {
  x: 40,
  y: 300
});

TweenMax.set($dashed, {
  opacity: 0.3
});

// the first scene
function sceneOne() {
  var tl = new TimelineMax();

  tl.add("start");
  tl.fromTo(
    $smCube,
    0.75,
    {
      scale: 0,
      rotation: -360,
      y: 400
    },
    {
      scale: 1,
      rotation: 0,
      y: 40,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    },
    "start"
  )
    .to(
      $smCube,
      0.3,
      {
        scale: 0,
        rotation: 100,
        transformOrigin: "50% 50%",
        ease: Back.easeIn
      },
      "start+=0.8"
    )
    .to(
      $dashed,
      1.5,
      {
        rotation: -200,
        scale: 1.5,
        opacity: 0.3,
        stroke: "#009E5A",
        transformOrigin: "50% 50%",
        ease: Circ.easeOut
      },
      "start"
    )
    .staggerFromTo(
      $iPop,
      0.3,
      {
        scale: 0,
        x: 0,
        y: 0
      },
      {
        scale: 1,
        x: 30,
        y: -30,
        ease: Back.easeOut
      },
      0.1,
      "start+=0.3"
    )
    .staggerTo(
      $iPop,
      0.2,
      {
        opacity: 0,
        scale: 3,
        transformOrigin: "50% 50%",
        ease: Back.easeIn
      },
      0.1,
      "start+=0.7"
    )
    .fromTo(
      $iInit,
      0.5,
      {
        drawSVG: "0 0",
        scale: 0.5,
        opacity: 0.5
      },
      {
        drawSVG: true,
        scale: 1.5,
        opacity: 1,
        transformOrigin: "50% 50%",
        ease: Back.easeOut
      },
      "start+=0.5"
    )
    .to(
      $iInit,
      0.3,
      {
        drawSVG: "90% 100%",
        scale: 2,
        opacity: 0
      },
      "start+=1"
    )
    .to(
      $ring,
      0.75,
      {
        opacity: 1,
        transformOrigin: "50% 50%",
        rotation: 100
      },
      "start+=1"
    )
    .to(
      $ring,
      0.4,
      {
        opacity: 0,
        scale: 1.7,
        transformOrigin: "50% 50%",
        rotation: 200
      },
      "start+=1.75"
    )
    .to(
      $dashed,
      0.5,
      {
        rotation: 100,
        scale: 3,
        opacity: 0,
        drawSVG: "100% 100%",
        transformOrigin: "50% 50%",
        ease: Circ.easeIn
      },
      "start+=1.5"
    );

  tl.timeScale(1.5);

  return tl;
}

var $circ = $("#circle circle"),
  $innerA = $(".inner-a");

TweenMax.set([$circ, $bk, $tri], {
  visibility: "visible",
  opacity: 0
});

TweenMax.set($circ, {
  x: 200,
  y: 225
});

TweenMax.set($tri, {
  x: 190,
  y: 150
});

// the second scene
function sceneTwo() {
  var tl = new TimelineMax();

  tl.add("two");
  tl.fromTo(
    $tri,
    1,
    {
      rotation: -250,
      opacity: 0
    },
    {
      rotation: 90,
      opacity: 1,
      transformOrigin: "50% 50%",
      ease: Circ.easeOut
    },
    "two"
  ).to(
    $bk,
    3,
    {
      opacity: 0.3
    },
    "two"
  );
  tl.staggerFrom(
    $triP,
    1,
    {
      fill: "#ffffff"
    },
    "two+=1"
  );
  tl.staggerFromTo(
    $triP,
    1,
    {
      scale: 1.04
    },
    {
      scaleX: 0,
      transformOrigin: "50% 50%",
      ease: Circ.easeOut
    },
    "two+=2.25"
  );
  tl.to(
    $tri,
    2,
    {
      y: 50,
      ease: Bounce.easeOut
    },
    "two+=1.25"
  );
  tl.fromTo(
    $circ,
    1,
    {
      scale: 0.1,
      stroke: "#222222",
      fill: "#000000",
      rotationX: -3000,
      opacity: 0
    },
    {
      scale: 1.2,
      stroke: "#FFFFFF",
      fill: "#111111",
      rotationX: 0,
      opacity: 0.9,
      transformOrigin: "50% 50%"
    },
    "two+=2.25"
  )
    .fromTo(
      $ring,
      0.75,
      {
        opacity: 0,
        scale: 1
      },
      {
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        rotation: 100
      },
      "two+=3.25"
    )
    .to(
      $circ,
      0.75,
      {
        stroke: "#3B3C3D",
        scale: 1,
        opacity: 0.5
      },
      "two+=3.25"
    )
    .to(
      $innerA,
      0.75,
      {
        opacity: 0
      },
      "two+=3"
    )
    .to(
      $circ,
      1.25,
      {
        opacity: 0,
        scale: 1.7,
        transformOrigin: "50% 50%",
        ease: Circ.easeOut
      },
      "two+=4"
    )
    .to(
      $bk,
      1.25,
      {
        scale: 0,
        opacity: 1,
        transformOrigin: "50% 50%"
      },
      "two+=4"
    )
    .to(
      $ring,
      1.25,
      {
        opacity: 0,
        scale: 1.7,
        transformOrigin: "50% 50%",
        rotation: 200,
        ease: Circ.easeOut
      },
      "two+=4"
    );

  tl.timeScale(1.5);

  return tl;
}

var $spikeSh = $("#spikey_2_ polygon"),
  $spikeL = $("#spikey_2_ polyline, #spikey_2_ line"),
  $spikeD = $("#dots_1_ circle");

TweenMax.set([$spikeSh, $spikeL, $spikeD], {
  visibility: "visible",
  opacity: 0
});

TweenMax.set($spikeSh, {
  css: {
    transformPerspective: 400,
    perspective: 400,
    transformStyle: "preserve-3d"
  }
});

// the third scene
function sceneThree() {
  var tl = new TimelineMax();

  tl.add("three");
  tl.staggerFromTo(
    $spikeSh,
    0.4,
    {
      opacity: 0,
      scaleX: 0
    },
    {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    },
    0.03,
    "three"
  )
    .staggerFromTo(
      $spikeL,
      0.4,
      {
        drawSVG: "0 0",
        opacity: 0
      },
      {
        opacity: 1,
        drawSVG: true,
        ease: Back.easeOut
      },
      0.01,
      "three"
    )
    .staggerFromTo(
      $spikeD,
      0.2,
      {
        opacity: 0,
        scaleX: 0
      },
      {
        opacity: 0.2,
        scale: 2,
        transformOrigin: "50% 50%",
        ease: Elastic.easeOut
      },
      0.03,
      "three"
    )
    .staggerTo(
      $spikeD,
      0.2,
      {
        opacity: 0,
        scale: 0,
        ease: Circ.easeIn
      },
      0.03,
      "three+=1"
    )
    .to(
      $bk,
      2,
      {
        opacity: 0.3,
        scale: 1
      },
      "three+=1"
    );
  tl.staggerTo(
    $spikeL,
    1,
    {
      opacity: 0
    },
    0.01,
    "three+=2.5"
  );
  $spikeSh.each(function(index, element) {
    tl.staggerTo(
      element,
      2,
      {
        css: {
          z: 2000,
          rotationX: totesRandom(100, -50),
          x: totesRandom(100, -100),
          y: totesRandom(200, -200)
        },
        ease: Circ.easeOut
      },
      0.01,
      "three+=3.5"
    );
  });
  tl.staggerTo(
    $spikeSh,
    0.5,
    {
      opacity: 0,
      rotation: 250,
      scale: 1.5
    },
    0.01,
    "three+=4"
  );
  tl.to(
    $bk,
    1,
    {
      opacity: 0,
      scale: 0
    },
    "three+=3.5"
  );

  tl.timeScale(1.5);

  return tl;
}

var $lLeft = $("#ccli1, #ccli4, #ccli7, #ccli12"),
  $lRight = $("#ccli2, #ccli8, #ccli10, #ccli11"),
  $lTop = $("#ccli3, #ccli5, #ccli13"),
  $lBottom = $("#ccli6, #ccli9"),
  $triLogo = $("#blueline, #triangle"),
  //using css selectors because of jquery :even performance hit
  $letO = $(".letters path:nth-child(2n)"),
  $letE = $(".letters path:nth-child(2n+1)");

TweenMax.set($("#logo"), {
  visibility: "visible"
});

// the fourth scene, logo
function sceneFour() {
  var tl = new TimelineMax();

  tl.add("four");
  tl.from(
    $("#whiterect"),
    2,
    {
      scaleY: 0,
      rotationX: 200,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    },
    "four"
  );
  tl.from(
    $triLogo,
    2,
    {
      scaleX: 0,
      rotationY: 200,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    },
    "four"
  );
  tl.fromTo(
    $("body"),
    5,
    {
      backgroundColor: "#3B3C3D"
    },
    {
      backgroundColor: "rgb(36, 89, 118)",
      ease: Power1.easeOut
    },
    "four"
  );
  tl.from(
    $lLeft,
    2,
    {
      x: -1000,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $lRight,
    2,
    {
      x: 1000,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $lTop,
    2,
    {
      y: -1000,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $lBottom,
    2,
    {
      y: 1000,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $letO,
    2,
    {
      scaleX: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $letE,
    2,
    {
      scaleY: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    },
    "four+=1"
  );
  tl.from(
    $("#bigtri"),
    1,
    {
      scaleX: 0,
      rotationY: 200,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    },
    "four+=1"
  );

  tl.timeScale(1.5);

  return tl;
}

var master = new TimelineMax();
master
  .add(sceneOne(), "scene1")
  .add(sceneTwo(), "scene2")
  .add(sceneThree(), "scene3")
  .add(sceneFour(), "scene4");

//master.seek("scene4");

function totesRandom(max, min) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).on("click", "a.size", function(e) {
  $(".wrapper").width(Math.floor(Math.random() * 60 + 20) + "%");
  e.preventDefault();
});

$(document).on("click", "a.replay", function(e) {
  master.restart();
  e.preventDefault();
});
