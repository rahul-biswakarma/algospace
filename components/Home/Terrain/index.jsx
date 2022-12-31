import React from "react";
import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Terrain() {
  var cols, rows;
  var w = 2500,
    h = 1000;
  var scl = 32;
  var flying = 0;
  var terrain = [];
  const PI = 3.14;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      document.getElementById("visualizer-container").offsetWidth,
      document.getElementById("visualizer-container").offsetHeight,
      p5.WEBGL
    ).parent(canvasParentRef);
    cols = w / scl;
    rows = h / scl;

    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
      for (var y = 0; y < rows; y++) {
        terrain[x].push(0);
      }
    }
  };

  const draw = (p5) => {
    flying -= 0.08;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p5.map(p5.noise(xoff, yoff), 0, 1, -350, 350);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    p5.background(0, 0, 0, 0);
    p5.translate(0, 300);
    p5.frameRate(22);
    p5.rotateX(PI / 3);
    p5.stroke(30, 200, 57, 150);
    p5.fill(30, 180, 57, 200);
    p5.translate(-w / 2, -h / 2);
    var curveCreator = 100;
    for (var y = 0; y < rows - 1; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      for (var x = 0; x < cols; x++) {
        p5.vertex(x * scl, y * scl, terrain[x][y]);
        p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p5.endShape();
    }
  };

  return <Sketch className="z-10" setup={setup} draw={draw} />;
}
