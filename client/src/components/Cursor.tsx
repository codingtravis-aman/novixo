import { useRef, useState, useEffect } from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 769px)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useCustomCursor({ cursorRef, followerRef });

  if (!isDesktop) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed z-[9999] pointer-events-none mix-blend-difference transition-[width,height,background,opacity] duration-150 w-5 h-5 rounded-full bg-primary/80 border-4 border-red-500 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 1 }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="fixed z-[9998] pointer-events-none border-2 border-primary/50 rounded-full transition-[width,height,border,opacity] duration-200 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-transparent border-4 border-blue-500"
        style={{ opacity: 1 }}
      />
    </>
  );
};

export default Cursor;
