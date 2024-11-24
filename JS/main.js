const today = new Date();
const hour = today.getHours();

function setGreetingString() {
    let element = document.getElementById('greeting');
    
    if (hour < 12) {
       element.textContent = "Good morning!";
    }
    else if (hour < 18) {
        element.textContent=  "Good afternoon!";
    }
    element.textContent = "Good evening!";
}

function setCurrentYear() {
    const year = today.getFullYear();
    let  element = document.getElementById('currentYear');
    element.textContent = year;
    console.log(year);
}

function handleScroll(event) {
    // Prevent the default scroll behavior
    event.preventDefault();

    const currentSection = document.getElementsByClassName('active')[0];
    let nextSection = null;

    if (event.deltaY > 0) { // Scrolling down
        if (currentSection.nextElementSibling) {
            nextSection = currentSection.nextElementSibling;
        }
    } else if (event.deltaY < 0) { // Scrolling up
        if (currentSection.previousElementSibling) {
            nextSection = currentSection.previousElementSibling;
        }
    }

    if (nextSection) {
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
        nextSection.scrollIntoView({behavior: 'smooth'});
    }
}

setGreetingString();
setCurrentYear();
window.addEventListener('wheel', handleScroll);