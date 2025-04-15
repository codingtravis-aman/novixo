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

    // Hide default cursor
    document.body.style.cursor = 'none';

    let followerX = 0;
    let followerY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    // Animate follower to smoothly catch up to the cursor
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.25; // Higher = faster
      followerY += (mouseY - followerY) * 0.25;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    animationFrameId = requestAnimationFrame(animateFollower);

    // Increase cursor size on hover over interactive elements
    const onElementHover = () => {
      cursor.classList.add('expanded');
      follower.classList.add('expanded');
    };

    // Reset cursor size
    const onElementLeave = () => {
      cursor.classList.remove('expanded');
      follower.classList.remove('expanded');
    };

    // Hide cursor when mouse leaves window
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    };

    // Show cursor when mouse enters window
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const hoverElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor="pointer"]');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', onElementHover);
      element.addEventListener('mouseleave', onElementLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.style.cursor = 'auto';
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', onElementHover);
        element.removeEventListener('mouseleave', onElementLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorRef, followerRef]);
}
