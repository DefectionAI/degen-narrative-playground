
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelRatio = window.devicePixelRatio || 1;
    const width = canvas.width = canvas.offsetWidth * pixelRatio;
    const height = canvas.height = canvas.offsetHeight * pixelRatio;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.min(width, height) / 2 - 2 * pixelRatio;
    
    // Create a pulsating animation
    let animationFrame: number;
    let hueRotation = 0;
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Outer glow effect
      const glow = ctx.createRadialGradient(
        centerX, centerY, outerRadius * 0.7,
        centerX, centerY, outerRadius * 1.2
      );
      
      hueRotation = (hueRotation + 0.5) % 360;
      
      glow.addColorStop(0, `hsla(${(hueRotation + 270) % 360}, 100%, 70%, 0.8)`);
      glow.addColorStop(0.5, `hsla(${hueRotation}, 100%, 60%, 0.4)`);
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Main circle
      const gradient = ctx.createLinearGradient(
        centerX - outerRadius, 
        centerY - outerRadius, 
        centerX + outerRadius, 
        centerY + outerRadius
      );
      gradient.addColorStop(0, '#9b87f5'); // purple
      gradient.addColorStop(1, '#3bf0e4'); // blue
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(10, 10, 15, 0.9)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius - 2 * pixelRatio, 0, Math.PI * 2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2 * pixelRatio;
      ctx.stroke();
      
      // Inner circuit pattern
      ctx.beginPath();
      const innerRadius = outerRadius * 0.6;
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${(hueRotation + 60) % 360}, 100%, 70%, 0.6)`;
      ctx.lineWidth = pixelRatio;
      ctx.stroke();
      
      // Circuit lines
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 / 5) * i;
        const lineLength = outerRadius * 0.4;
        
        const startX = centerX + Math.cos(angle) * innerRadius;
        const startY = centerY + Math.sin(angle) * innerRadius;
        
        const endX = centerX + Math.cos(angle) * (innerRadius + lineLength);
        const endY = centerY + Math.sin(angle) * (innerRadius + lineLength);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `hsla(${(hueRotation + i * 30) % 360}, 100%, 70%, 0.7)`;
        ctx.lineWidth = pixelRatio;
        ctx.stroke();
        
        // Add nodes at the ends of lines
        ctx.beginPath();
        ctx.arc(endX, endY, 2 * pixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(hueRotation + i * 30) % 360}, 100%, 70%, 0.9)`;
        ctx.fill();
      }
      
      // Draw "D" in the center 
      const fontSize = outerRadius * 0.8;
      ctx.font = `bold ${fontSize}px "Audiowide", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Create text gradient
      const textGradient = ctx.createLinearGradient(
        centerX - fontSize / 2, 
        centerY - fontSize / 2, 
        centerX + fontSize / 2, 
        centerY + fontSize / 2
      );
      textGradient.addColorStop(0, '#9b87f5');
      textGradient.addColorStop(1, '#3bf0e4');
      
      ctx.fillStyle = textGradient;
      ctx.fillText('D', centerX, centerY + fontSize * 0.1);
      
      animationFrame = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [size]);
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={`relative ${sizeClasses[size]}`}>
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full rounded-full"
          style={{ filter: 'drop-shadow(0 0 6px rgba(155, 135, 245, 0.6))' }}
        />
      </div>
      {withText && (
        <span className={`font-display flicker-text ${textSizeClasses[size]}`}>
          Defection
        </span>
      )}
    </Link>
  );
};

export default Logo;
