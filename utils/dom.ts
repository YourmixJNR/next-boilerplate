/**
 * Scrolls the page to the HTML element with the specified ID.
 * Uses `scrollIntoView()` to bring the element into the viewport if it exists.
 *
 * @param id - the ID of the target HTML element to scroll to.
 *
 */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView();
}

/**
 * Returns a throttled version of the given callback function that can only be invoked
 * once per specified delay interval. useful for preventing rapid repeated clicks.
 *
 * @returns A function that wraps the callback with throttling behavior.
 *
 */
export function throttleClick(callback: () => void, delay = 500) {
  let lastCall = 0;
  return () => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      callback();
      lastCall = now;
    }
  };
}
