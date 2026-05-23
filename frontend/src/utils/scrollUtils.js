// src/utils/scrollUtils.js

/**
 * Smoothly scrolls the window to a specific Y coordinate.
 * @param {number} targetY - The absolute Y coordinate to scroll to.
 * @param {number} duration - The duration of the scroll animation in milliseconds (default: 1000).
 */
export const smoothScrollTo = (targetY, duration = 1000) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  
  // Easing function for smooth acceleration and deceleration
  const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  
  requestAnimationFrame(step);
};