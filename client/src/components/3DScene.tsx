import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ThreeDScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Simulated 3D effect with pure CSS/JS
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Parameters for the 3D grid
    const gridSize = 20;
    const gridSpacing = 30;
    const perspective = 500;
    const points: [number, number, number][] = [];
    
    // Generate 3D points for a grid
    for (let x = -gridSize/2; x < gridSize/2; x++) {
      for (let z = -gridSize/2; z < gridSize/2; z++) {
        points.push([x * gridSpacing, 0, z * gridSpacing]);
      }
    }
    
    // Animation variables
    let animationFrame: number;
    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / canvas.width - 0.5) * 100;
      mouseY = ((e.clientY - rect.top) / canvas.height - 0.5) * 50;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Drawing function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 3D transformations
      rotation += 0.003;
      
      // Projected points after rotation
      const projectedPoints: [number, number, number][] = points.map(([x, y, z]) => {
        // Apply rotation around Y-axis with mouse influence
        const rotationY = rotation + mouseX * 0.0005;
        const rotationX = mouseY * 0.0005;
        
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        
        // Rotate around Y-axis
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;
        
        // Rotate around X-axis
        const y1 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;
        
        // Calculate perspective
        const scale = perspective / (perspective + z2);
        const px = x1 * scale + canvas.width / 2;
        const py = y1 * scale + canvas.height / 2;
        
        return [px, py, z2];
      });
      
      // Draw lines between nearby points
      ctx.strokeStyle = 'rgba(255, 111, 97, 0.2)';
      ctx.beginPath();
      
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const [x1, y1, z1] = projectedPoints[i];
          const [x2, y2, z2] = projectedPoints[j];
          
          // Calculate distance between points
          const dx = x1 - x2;
          const dy = y1 - y2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw lines between nearby points
          if (distance < gridSpacing * 1.5) {
            // Line opacity based on z-value (depth)
            const opacity = Math.min(1, Math.max(0.1, 1 - (z1 + z2) / (perspective * 4)));
            ctx.strokeStyle = `rgba(255, 111, 97, ${opacity * 0.3})`;
            ctx.lineWidth = opacity * 1.5;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      for (const [x, y, z] of projectedPoints) {
        const opacity = Math.min(1, Math.max(0.2, 1 - z / (perspective * 2)));
        const radius = opacity * 2;
        
        ctx.fillStyle = `rgba(255, 111, 97, ${opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrame = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-80">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ filter: 'blur(1px)' }}
      />
      
      {/* Additional 3D elements */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ top: '20%', left: '15%' }}
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        style={{ bottom: '10%', right: '10%' }}
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </div>
  );
};

export default ThreeDScene;