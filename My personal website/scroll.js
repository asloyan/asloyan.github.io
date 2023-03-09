// Get all the section elements
const sections = document.querySelectorAll('section');

// Add an event listener to the window object to detect when the page is scrolled
window.addEventListener('scroll', function() {
  // For each section, check if it's in the viewport
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const bounding = section.getBoundingClientRect();
    
    // If the section is in the viewport, make it the active section and exit the loop
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      document.querySelector('nav a.active').classList.remove('active');
      document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
      break;
    }
  }
});

// Add an event listener to each navigation link to smoothly scroll to the corresponding section
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    const offset = target.offsetTop - 50;
    
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

// Add an event listener to the main element to detect when it's scrolled and snap to the nearest section
const main = document.querySelector('main');
main.addEventListener('scroll', function() {
  // For each section, check if it's in the viewport
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const bounding = section.getBoundingClientRect();
    
    // If the section is in the viewport, snap to it and exit the loop
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      main.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      break;
    }
  }
});
