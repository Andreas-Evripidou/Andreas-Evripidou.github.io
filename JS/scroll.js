let lastScrollTime = 0;
let lastScrollY = 0;
const slowScrollThreshold = 50; // Minimum time (ms) between scrolls for "slow scroll"
const fastScrollThreshold = 2000; 
const scrollDebounceDelay = 20; // Debounce delay to avoid rapid firing

const scrollHandler = (event) => {
  const now = Date.now();
  const currentScrollY = window.scrollY;

  const timeElapsed = now - lastScrollTime;
  const distanceScrolled = Math.abs(currentScrollY - lastScrollY);

  if (timeElapsed > slowScrollThreshold && timeElapsed < fastScrollThreshold) {
    if ( event.deltaY> 0) {
      // Scrolling down
      moveToNextSection(currentScrollY, "down");
    } else if (event.deltaY < 0) {
      // Scrolling up
      moveToNextSection(currentScrollY, "up");
    }
  }
  
  lastScrollTime = now;
  lastScrollY = currentScrollY;
};

let debounceTimeout;
window.addEventListener('wheel', (event) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(scrollHandler(event), scrollDebounceDelay);
});

function moveToNextSection(currentScrollY, direction) {
    const sections = Array.from(document.querySelectorAll("section"));
    let targetSection;
  
    if (direction === "down") {
      // Find the next section below the current position
      targetSection = sections.find(section => section.offsetTop > currentScrollY);
    } else if (direction === "up") {
      // Find the previous section above the current position
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < currentScrollY) {
          targetSection = sections[i];
          break;
        }
      }
    }
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
