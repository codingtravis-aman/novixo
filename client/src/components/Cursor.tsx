import { useRef } from 'react';
import { useCustomCursor } from '@/hooks/useCustomCursor';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  useCustomCursor({ cursorRef, followerRef });

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed w-5 h-5 rounded-full bg-primary/80 pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-[9999] transition-[width,height] duration-200"
      />
      <div 
        ref={followerRef} 
        className="fixed w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9998] transition-transform duration-150 ease-out"
      />
    </>
  );
};

export default Cursor;
