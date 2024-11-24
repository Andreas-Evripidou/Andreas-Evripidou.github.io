const today = new Date();
const hour = today.getHours();

function getGreetingString() {
    if (hour < 12) {
       return  "Good morning!";
    }
    else if (hour < 18) {
        return "Good afternoon!";
    }
    return "Good evening!";
}

function getCurrentYear() {
    const year = today.getFullYear();
    let  element = document.getElementById('currentYear');
    element.textContent = year;
    console.log(year);
}

let element = document.getElementById('greeting');
element.textContent = getGreetingString();

getCurrentYear();

// function handleScroll(event) {
//     if ( event.deltaY > 0) {
//         const currentSection = document.getElementsByClassName('active')[0];
//         currentSection.classList.remove('active');
//         let previousSection = currentSection.previousElementSibling;
//         if (!previousSection) {
//             previousSection = document.querySelector('.section:last-child');
//         }
//         previousSection.classList.add('active');
//         previousSection.scrollIntoView({behavior: 'smooth'});
//         return;
//     }
    
//     const currentSection = document.getElementsByClassName('active')[0];
    
//     if (currentSection.nextElementSibling === null) {
//         return;
//     }

//     currentSection.classList.remove('active');
//     let nextSection = currentSection.nextElementSibling;
//     nextSection.classList.add('active');
//     nextSection.scrollIntoView({behavior: 'smooth'});
// }

// document.addEventListener('scroll', handleScroll);