import React, { useEffect, useRef, useState } from 'react';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  
  constructor(width: number, height: number, isMobile: boolean, isTablet: boolean) {
    this.reset(width, height, isMobile, isTablet);
  }

  reset(width: number, height: number, isMobile: boolean, isTablet: boolean) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    
    // Optimize speed based on device
    let speed = 0.4;
    if (isMobile) speed = 0.2;
    else if (isTablet) speed = 0.3;
    
    this.vx = (Math.random() - 0.5) * speed;
    this.vy = (Math.random() - 0.5) * speed;
    
    // Optimize particle size based on device
    if (isMobile) this.size = Math.random() * 2 + 0.5;
    else if (isTablet) this.size = Math.random() * 2.5 + 1;
    else this.size = Math.random() * 3 + 1;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D, isMobile: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00c8ff";
    
    // Disable shadows on mobile for better performance
    if (!isMobile) {
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#00c8ff";
    }
    
    ctx.fill();
  }
}

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  // Detect device
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    // Get optimized particle count for mobile
    const getParticleCount = () => {
      if (isMobile) return 50; // Increased from 40 for better visibility
      if (isTablet) return 70;
      return 90;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particleCount = getParticleCount();
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(canvas.width, canvas.height, isMobile, isTablet));
      }
    };

    const drawGrid = () => {
      // Only draw grid on desktop
      if (isMobile || isTablet) return;
      
      const spacing = 40;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height * 0.75);
      ctx.rotate(Math.PI);

      const gridLines = 15;
      for (let y = 0; y < gridLines; y++) {
        const scale = 1 + y * 0.12;
        ctx.strokeStyle = "rgba(0,180,255,0.08)";
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.moveTo(-canvas.width, y * spacing * scale);
        ctx.lineTo(canvas.width, y * spacing * scale);
        ctx.stroke();
      }

      for (let x = -15; x < 15; x++) {
        ctx.beginPath();
        ctx.moveTo(x * spacing, -100);
        ctx.lineTo(x * spacing, canvas.height);
        ctx.stroke();
      }

      ctx.restore();
    };

    const connectParticles = () => {
      const particles = particlesRef.current;
      const connectionDistance = isMobile ? 120 : 150;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            
            const opacity = isMobile 
              ? 0.6 * (1 - dist / connectionDistance)
              : (1 - dist / connectionDistance);
              
            ctx.strokeStyle = `rgba(0,180,255,${opacity})`;
            ctx.lineWidth = isMobile ? 0.8 : 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = (currentTime: number) => {
      if (!canvas || !ctx) return;
      
      // Frame rate limiting for mobile
      if (isMobile) {
        const delta = currentTime - lastTime;
        if (delta < frameInterval) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
        lastTime = currentTime - (delta % frameInterval);
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      connectParticles();

      particlesRef.current.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx, isMobile);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    
    if (isMobile) {
      lastTime = performance.now();
    }
    animate(performance.now());

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, isTablet]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="networkCanvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 0,
          pointerEvents: 'none',
          background: '#010816',
        }}
      />
      <div
        className="canvas-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          background: `radial-gradient(circle at center, rgba(0, 170, 255, ${isMobile ? 0.15 : 0.2}), transparent ${isMobile ? '60%' : '70%'})`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </>
  );
};

export default NetworkBackground;