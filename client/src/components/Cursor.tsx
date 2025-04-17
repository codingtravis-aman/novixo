import { useRef, useState, useEffect } from 'react';
import { useCustomCursor } from '@/hooks/useCustomCursor';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useCustomCursor({ cursorRef, followerRef });

  // Always show cursor for debugging
  // if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={cursorRef} 
        className="fixed z-[9999] pointer-events-none mix-blend-difference transition-[width,height,background,opacity] duration-150 w-5 h-5 rounded-full bg-primary/80 border-4 border-red-500 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 1 }}
      />
      {/* Follower ring */}
      <div 
        ref={followerRef} 
        className="fixed z-[9998] pointer-events-none border-2 border-primary/50 rounded-full transition-[width,height,border,opacity] duration-200 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-transparent border-4 border-blue-500"
        style={{ opacity: 1 }}
      />
    </>
  );
};

export default Cursor;
