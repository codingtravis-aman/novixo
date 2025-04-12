import { useEffect } from 'react';

interface UseCustomCursorProps {
  cursorRef: React.RefObject<HTMLDivElement>;
  followerRef: React.RefObject<HTMLDivElement>;
}

export function useCustomCursor({ cursorRef, followerRef }: UseCustomCursorProps) {
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      // Update cursor position
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Delay follower position for trailing effect
      setTimeout(() => {
        if (follower) {
          follower.style.left = `${e.clientX}px`;
          follower.style.top = `${e.clientY}px`;
        }
      }, 50);
    };

    // Increase cursor size on hover over interactive elements
    const onElementHover = () => {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      follower.style.width = '60px';
      follower.style.height = '60px';
    };

    // Reset cursor size
    const onElementLeave = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      follower.style.width = '40px';
      follower.style.height = '40px';
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    
    // Apply hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .hover-scale');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', onElementHover);
      element.addEventListener('mouseleave', onElementLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', onElementHover);
        element.removeEventListener('mouseleave', onElementLeave);
      });
    };
  }, [cursorRef, followerRef]);
}
