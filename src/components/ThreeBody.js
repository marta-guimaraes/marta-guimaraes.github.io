import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const ThreeBody = () => {
  const sketch = (p5) => {
    let orbitData = [];
    let frame = 0;
    let trailLength = 40; // Only last 40 frames for the tail
    let scale = 140;
    let trails = [[], [], []];
    let centerX = 0;
    let centerY = 0;

    p5.preload = () => {
      orbitData = p5.loadJSON("/assets/three_body_orbit.json", () => {
        const keys = Object.keys(orbitData);
        let sumX = 0;
        let sumY = 0;
        for (let k of keys) {
          const { x1, y1, x2, y2, x3, y3 } = orbitData[k];
          sumX += (x1 + x2 + x3) / 3;
          sumY += (y1 + y2 + y3) / 3;
        }
        centerX = sumX / keys.length;
        centerY = sumY / keys.length;
      });
    };

    p5.setup = () => {
      p5.createCanvas(300, 300);
      p5.frameRate(50);
      p5.background("#0f0e17");
    };

    p5.draw = () => {
      p5.background(15, 16, 26, 80);
      p5.translate(p5.width / 2 - centerX * scale, p5.height / 2 - centerY * scale);

      const keys = Object.keys(orbitData);
      if (keys.length === 0) return;

      let i = frame % keys.length;
      const { x1, y1, x2, y2, x3, y3 } = orbitData[keys[i]];

      // Update trails
      trails[0].push([x1 * scale, y1 * scale]);
      trails[1].push([x2 * scale, y2 * scale]);
      trails[2].push([x3 * scale, y3 * scale]);

      if (trails[0].length > trailLength) trails[0].shift();
      if (trails[1].length > trailLength) trails[1].shift();
      if (trails[2].length > trailLength) trails[2].shift();

      const colors = [
        p5.color(255, 120, 50),   // Orange
        p5.color(120, 150, 255),  // Light Blue
        p5.color(180, 80, 255)    // Purple
      ];

      for (let j = 0; j < 3; j++) {
        p5.noFill();
        p5.beginShape();

        for (let k = 0; k < trails[j].length; k++) {
          const [x, y] = trails[j][k];
          const alpha = p5.map(k, 0, trails[j].length, 0, 255);
          p5.stroke(colors[j].levels[0], colors[j].levels[1], colors[j].levels[2], alpha);
          p5.strokeWeight(2);
          p5.vertex(x, y);
        }

        p5.endShape();

        /// Draw the head with a brighter version of its color as glow
        const lastPt = trails[j][trails[j].length - 1];

        // Make a brighter glow color (increase brightness manually)
        const glowColor = p5.color(
          Math.min(255, colors[j].levels[0] + 100),  // R
          Math.min(255, colors[j].levels[1] + 100),  // G
          Math.min(255, colors[j].levels[2] + 100),  // B
          150 // slight transparency
        );

        p5.noStroke();
        p5.fill(glowColor);
        p5.drawingContext.shadowBlur = 15;
        p5.drawingContext.shadowColor = glowColor;
        p5.circle(lastPt[0], lastPt[1], 10); // glow

        // Core solid color
        p5.drawingContext.shadowBlur = 0;
        p5.fill(colors[j]);
        p5.circle(lastPt[0], lastPt[1], 8);

        // Reset shadow
        p5.drawingContext.shadowBlur = 0;
      }

      frame++;
    };
  };

  return (
    <div id="three-body-animation" style={{ display: "flex", justifyContent: "center" }}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default ThreeBody;
