import React, { useRef, useEffect } from 'react';

// --- Star Class ---
class Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  maxAlpha: number;

  constructor(public width: number, public height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    const speedFactor = Math.random() * 0.3 + 0.1;
    this.vx = (Math.random() - 0.5) * speedFactor;
    this.vy = (Math.random() - 0.5) * speedFactor;
    this.radius = Math.random() * 1.2;
    this.maxAlpha = Math.random() * 0.7 + 0.1;
    this.alpha = this.maxAlpha;
    this.twinkleSpeed = Math.random() * 0.02;
  }

  update() {
    this.alpha += this.twinkleSpeed;
    if (this.alpha > this.maxAlpha || this.alpha < 0) {
      this.twinkleSpeed = -this.twinkleSpeed;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > this.width) this.x = 0;
    if (this.x < 0) this.x = this.width;
    if (this.y > this.height) this.y = 0;
    if (this.y < 0) this.y = this.height;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    context.fill();
  }
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        s.update();
        s.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      const { width, height } = canvas;
      const starCount = Math.floor((width * height) / 9000);
      stars = Array.from({ length: starCount }, () => new Star(width, height));
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      init();
      animate();
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
      <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: '#251634',
          }}
          aria-hidden="true"
      />
  );
};

export default Background;
