import React, { useEffect, useState } from "react";

const ParticleCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [RADIUS] = useState(70);
  const [RADIUS_SCALE, setRadiusScale] = useState(1);
  const [RADIUS_SCALE_MIN] = useState(1);
  const [RADIUS_SCALE_MAX] = useState(1.5);
  const [QUANTITY] = useState(25);
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);
  const [particles, setParticles] = useState([]);
  const [mouseX, setMouseX] = useState(screenWidth * 0.5);
  const [mouseY, setMouseY] = useState(screenHeight * 0.5);
  const [mouseIsDown, setMouseIsDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX - (window.innerWidth - screenWidth) * 0.5);
      setMouseY(event.clientY - (window.innerHeight - screenHeight) * 0.5);
    };

    const handleMouseDown = () => {
      setMouseIsDown(true);
    };

    const handleMouseUp = () => {
      setMouseIsDown(false);
    };

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        setMouseX(
          event.touches[0].pageX - (window.innerWidth - screenWidth) * 0.5
        );
        setMouseY(
          event.touches[0].pageY - (window.innerHeight - screenHeight) * 0.5
        );
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        setMouseX(
          event.touches[0].pageX - (window.innerWidth - screenWidth) * 0.5
        );
        setMouseY(
          event.touches[0].pageY - (window.innerHeight - screenHeight) * 0.5
        );
      }
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("mousedown", handleMouseDown, false);
    window.addEventListener("mouseup", handleMouseUp, false);
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    window.addEventListener("resize", handleResize, false);

    setCanvas(document.getElementById("world"));
    setContext(document.getElementById("world").getContext("2d"));

    createParticles();

    windowResizeHandler();

    const intervalId = setInterval(loop, 1000 / 60);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, [screenWidth, screenHeight]);

  const createParticles = () => {
    const newParticles = [];

    for (let i = 0; i < QUANTITY; i++) {
      const particle = {
        size: 1,
        position: { x: mouseX, y: mouseY },
        offset: { x: 0, y: 0 },
        shift: { x: mouseX, y: mouseY },
        speed: 0.01 + Math.random() * 0.04,
        targetSize: 1,
        fillColor:
          ("#" + (Math.random() * 0x404040 + 0xaaaaaa).toString(16)) | 0,
        orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
      };

      newParticles.push(particle);
    }

    setParticles(newParticles);
  };

  const windowResizeHandler = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);

    if (canvas) {
      canvas.width = screenWidth;
      canvas.height = screenHeight;
    }
  };

  const loop = () => {
    if (mouseIsDown) {
      setRadiusScale(
        (prevRadiusScale) =>
          prevRadiusScale + (RADIUS_SCALE_MAX - prevRadiusScale) * 0.02
      );
    } else {
      setRadiusScale(
        (prevRadiusScale) =>
          prevRadiusScale - (prevRadiusScale - RADIUS_SCALE_MIN) * 0.02
      );
    }

    setRadiusScale((prevRadiusScale) =>
      Math.min(prevRadiusScale, RADIUS_SCALE_MAX)
    );

    if (context) {
      context.fillStyle = "rgba(0,0,0,0.05)";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      particles.forEach((particle, i) => {
        const lp = { x: particle.position.x, y: particle.position.y };

        particle.offset.x += particle.speed;
        particle.offset.y += particle.speed;

        particle.shift.x += (mouseX - particle.shift.x) * particle.speed;
        particle.shift.y += (mouseY - particle.shift.y) * particle.speed;

        particle.position.x =
          particle.shift.x +
          Math.cos(i + particle.offset.x) * (particle.orbit * RADIUS_SCALE);
        particle.position.y =
          particle.shift.y +
          Math.sin(i + particle.offset.y) * (particle.orbit * RADIUS_SCALE);

        particle.position.x = Math.max(
          Math.min(particle.position.x, screenWidth),
          0
        );
        particle.position.y = Math.max(
          Math.min(particle.position.y, screenHeight),
          0
        );

        particle.size += (particle.targetSize - particle.size) * 0.05;

        if (Math.round(particle.size) === Math.round(particle.targetSize)) {
          particle.targetSize = 1 + Math.random() * 7;
        }

        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.strokeStyle = particle.fillColor;
        context.lineWidth = particle.size;
        context.moveTo(lp.x, lp.y);
        context.lineTo(particle.position.x, particle.position.y);
        context.stroke();
        context.arc(
          particle.position.x,
          particle.position.y,
          particle.size / 2,
          0,
          Math.PI * 2,
          true
        );
        context.fill();
      });
    }
  };

  return (
    <canvas id="world" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}></canvas>
  );
};

export default ParticleCanvas;
