export function throttle(callback: () => void) {
  let ticking = false;

  return function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
}
